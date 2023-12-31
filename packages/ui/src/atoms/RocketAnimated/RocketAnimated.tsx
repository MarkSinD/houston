import {memo, useEffect, useState} from 'react'
import {animated, useSpring} from 'react-spring'
import endExplosion from '@monorepo-example/resource/images/rocket-animated/explosion.svg'
import fire from '@monorepo-example/resource/images/rocket-animated/fireTorch.gif'
import rocket from '@monorepo-example/resource/images/rocket-animated/rocket.png'
import smoke from '@monorepo-example/resource/images/rocket-animated/smoke.gif'
import weHaveAProblem from '@monorepo-example/resource/images/rocket-animated/we-have-a-problem.svg'
import explodeSound from '@monorepo-example/resource/sounds/explode.mp3'
import flyingSound from '@monorepo-example/resource/sounds/flying.mp3'
import startSound from '@monorepo-example/resource/sounds/start.mp3'
import {Box} from '@mui/material'
import useSound from 'use-sound'

import classes from './RocketAnimated.module.scss'

export interface RocketAnimatedProps {
  isAction?: boolean
  handleClick?: () => void
  onLaunchAnimationEnd?: () => void
  isLobby?: boolean
  isRocketExplosion?: boolean
}

export const RocketAnimated = memo(({
  isAction = false,
  handleClick = () => {
  },
  onLaunchAnimationEnd = () => {
  },
  isLobby = false,
  isRocketExplosion = false,
}: RocketAnimatedProps) => {
  const [playStartSound, {stop: stopStartSound}] = useSound(startSound)
  const [playStartExplode, {stop: stopExplodeSound}] = useSound(explodeSound)
  const [playFlyingSound, {stop: stopFlyingSound}] = useSound(flyingSound, {
    loop: !isLobby,
    playbackRate: isLobby ? 3 : 1,
  })

  const applicationHeight =
    document.documentElement?.clientHeight === 0 ? 0 : document.documentElement.clientHeight

  const [isSurfing, setIsSurfing] = useState(false)

  useEffect(
    () => () => {
      stopStartSound()
      stopExplodeSound()
      stopFlyingSound()
    },
    [stopExplodeSound, stopFlyingSound, stopStartSound]
  )

  useEffect(() => {
    if (isSurfing) {
      playFlyingSound()
      stopExplodeSound()
    }
    if (isAction && !isSurfing) {
      playStartSound()
      stopExplodeSound()
    }
    if (isRocketExplosion) {
      setIsSurfing(false)
      stopFlyingSound()
      stopStartSound()
      playStartExplode()
    }
  }, [isRocketExplosion, isSurfing, isAction])

  const onLaunchEnd = () => {
    if (isSurfing) {
      onLaunchAnimationEnd()
      return
    }
    if (isAction) {
      setIsSurfing(true)
    }
  }

  // isLobby ? applicationHeight should be enough for rocket to leave the screen considering rocket div is 30% from the bottom
  // else ? calculates height enough for rocket to stay inside game container knowing rocket has 50% of container space above it
  const rocketMaxHeightOnScreen = isLobby ? applicationHeight : 0.2 * applicationHeight
  // calculates how low will rocket get before takeoff
  const rocketPrepareForTakeoffHeight = 0.05 * applicationHeight

  const rocketSurfStyles = useSpring({
    from: {
      transform: `translateY(${isSurfing ? `${rocketPrepareForTakeoffHeight}px` : '0px'})`,
    },
    to: {
      transform: `translateY(${
        isSurfing
          ? `-${rocketMaxHeightOnScreen}px`
          : isAction
            ? `${rocketPrepareForTakeoffHeight}px`
            : '0px'
      })`,
    },
    config: {mass: 6, duration: 1000},
    onRest: () => {
      onLaunchEnd()
    },
  })

  const startExplosionStyles = useSpring({
    from: {opacity: 0, transform: 'translateY(0px)'},
    to: [
      {
        opacity: isAction && !isSurfing ? 1 : 0,
        transform: `translateY(${isAction ? '50px' : '0px'})`,
      },
      {opacity: 0},
    ],
    config: {mass: 6, duration: 400},
  })

  const endExplosionStyles = useSpring({
    from: {opacity: 0},
    to: [{opacity: isRocketExplosion ? 1 : 0}, {opacity: 0}],
    config: {mass: 6, duration: 1000},
  })

  return (
    <div className={classes.rocketContainer}>
      {isLobby ? null : (
        <>
          <animated.div className={classes.weHaveAProblem} style={endExplosionStyles}>
            <img alt="" src={weHaveAProblem}/>
          </animated.div>
          <animated.div className={classes.endExplosion} style={endExplosionStyles}>
            <img alt="" src={endExplosion}/>
          </animated.div>
          <animated.div
            className={`${classes.endExplosion} ${classes.endExplosionRight}`}
            style={endExplosionStyles}
          >
            <img alt="" src={endExplosion}/>
          </animated.div>
          <animated.div
            className={`${classes.endExplosion} ${classes.endExplosionLeft}`}
            style={endExplosionStyles}
          >
            <img alt="" src={endExplosion}/>
          </animated.div>
        </>
      )}

      <animated.div
        className={
          isRocketExplosion ? `${classes.rocketMain} ${classes.transparent}` : classes.rocketMain
        }
        style={rocketSurfStyles}
      >
        <Box alt="HeyHouston Rocket" component="img" src={rocket} sx={{height: '200px'}} onClick={handleClick}/>
      </animated.div>

      {isAction ? (
        <animated.div
          className={
            isRocketExplosion ? `${classes.fireMain} ${classes.transparent}` : classes.fireMain
          }
          style={rocketSurfStyles}
        >
          <img
            alt="Fire Rocket"
            src={fire}
            style={{transform: 'rotate(90deg)'}}
            onClick={handleClick}
          />
        </animated.div>
      ) : null}

      {isLobby ? null : (
        <animated.div className={classes.startExplosion} style={startExplosionStyles}>
          <img alt="" src={smoke}/>
        </animated.div>
      )}
    </div>
  )
})

RocketAnimated.displayName = 'RocketAnimated'


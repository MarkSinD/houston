import {type FC} from 'react'
import CountUp from 'react-countup'
import {animated, useSpring} from 'react-spring'
import scale from '@monorepo-example/resource/images/scale.png'
import {Box} from "@mui/material";

import classes from './BetCoefficientScale.module.scss'

export interface BetCoefficientScaleProps {
  isAction?: boolean
  coefficient: number
}

const BetCoefficientScale: FC<BetCoefficientScaleProps> = ({
  isAction = true,
  coefficient = 0,
}) => {
  const applicationHeight =
    document.documentElement?.clientHeight === 0 ? 0 : document.documentElement.clientHeight
  const maxHeight = 0.4 * applicationHeight

  const scaleStyles = useSpring({
    from: {transform: "translateY('0px')"},
    to: {
      transform: `${`translateY(${isAction ? `-${maxHeight}px` : '0px'})`}`,
    },
    config: {mass: 6, duration: 1000},
  })

  return (
    <>
      <animated.div className={classes.betCoefficient} style={scaleStyles}>
        <CountUp
          decimal=","
          decimals={2}
          duration={coefficient}
          end={isAction ? coefficient : 0}
          prefix={'x'}
          start={0}
        />
      </animated.div>
      <Box alt="scale" component="img" src={scale} sx={{height: '100px', zIndex: 3}}/>
    </>
  )
}

export default BetCoefficientScale

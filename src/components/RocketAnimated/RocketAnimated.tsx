import {FC, useEffect, useState} from "react";
import rocket from "../../assets/images/rocket-animated/rocket.png";
import startExplosion from "../../assets/images/rocket-animated/start-explosion.svg";
import endExplosion from "../../assets/images/rocket-animated/explosion.svg";
import weHaveAProblem from "../../assets/images/rocket-animated/we-have-a-problem.svg";
import { useSpring, animated } from 'react-spring'
import classes from './RocketAnimated.module.scss';

export interface RocketAnimatedProps {
    isAction?: boolean;
    handleClick?: () => void;
    onLaunchAnimationEnd?: () => void;
    isLobby?: boolean;
    isRocketExplosion?: boolean;
}

export const RocketAnimated: FC<RocketAnimatedProps> = ({
  isAction= false,
  handleClick = () => {},
  onLaunchAnimationEnd = () => {},
  isLobby = false,
  isRocketExplosion = false
}) => {

    const applicationHeight = document.documentElement?.clientHeight ? document.documentElement.clientHeight : 0;

    const [isSurfing, setIsSurfing] = useState(false);

    useEffect(() => {
        if (isRocketExplosion) {
            setIsSurfing(false);
        }
    }, [isRocketExplosion, isSurfing]);

    const onLaunchEnd = () => {
        if (isSurfing) {
            onLaunchAnimationEnd();
            return;
        }
        if (isAction) {
            setIsSurfing(true);
        }
    };

    //isLobby ? applicationHeight should be enough for rocket to leave the screen considering rocket div is 30% from the bottom
    //else ? calculates height enough for rocket to stay inside game container knowing rocket has 50% of container space above it
    const rocketMaxHeightOnScreen = isLobby ? applicationHeight : 0.2*applicationHeight;
    //calculates how low will rocket get before takeoff
    const rocketPrepareForTakeoffHeight = 0.05*applicationHeight;

    const rocketSurfStyles = useSpring({
        from: {transform:  `translateY(${isSurfing ? rocketPrepareForTakeoffHeight + 'px' : '0px'})`},
        to: {transform:  `translateY(${isSurfing ? '-' + rocketMaxHeightOnScreen + 'px' : (isAction ? rocketPrepareForTakeoffHeight + 'px' : '0px')})`},
        config: {mass: 6, duration: 1000},
        onRest: () => { onLaunchEnd() }
    })

    const startExplosionStyles = useSpring({
        from: {opacity: 0, transform: "translateY(0px)"},
        to: [{opacity: isAction && !isSurfing ? 1 : 0, transform: `translateY(${isAction ? '50px' : '0px'})`},
            {opacity: 0}],
        config: {mass: 6, duration: 400},
    })

    const endExplosionStyles = useSpring({
        from: {opacity: 0},
        to: [{opacity: isRocketExplosion ? 1 : 0}, {opacity: 0}],
        config: {mass: 6, duration: 1000},
    })

    return (
        <div className={classes.rocketContainer}>
            { !isLobby ? (
                <>
                    <animated.div className={classes.weHaveAProblem} style={ endExplosionStyles }>
                        <img src={weHaveAProblem} alt=''/>
                    </animated.div>
                    <animated.div className={classes.endExplosion} style={ endExplosionStyles }>
                        <img src={endExplosion} alt=''/>
                    </animated.div>
                    <animated.div className={classes.endExplosion + ' ' + classes.endExplosionRight} style={ endExplosionStyles }>
                        <img src={endExplosion} alt=''/>
                    </animated.div>
                    <animated.div className={classes.endExplosion + ' ' + classes.endExplosionLeft} style={ endExplosionStyles }>
                        <img src={endExplosion} alt=''/>
                    </animated.div>
                </>
            ) : null
            }

            <animated.div className={isRocketExplosion ? classes.rocketMain + ' ' + classes.transparent : classes.rocketMain} style={ rocketSurfStyles }>
                <img
                    src={rocket}
                    alt='HeyHouston Rocket'
                    onClick={handleClick}
                />
            </animated.div>

            { !isLobby ? (
                <animated.div className={classes.startExplosion} style={ startExplosionStyles }>
                    <img src={startExplosion} alt=''/>
                </animated.div>
            ) : null
            }
        </div>
    );
};
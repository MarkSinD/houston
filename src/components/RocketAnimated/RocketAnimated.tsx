import {FC, useState} from "react";
import rocket from "../../assets/images/rocket.png";
import startExplosion from "../../assets/gifs/start-explosion.gif";
import endExplosion from "../../assets/gifs/end-explosion.gif";
import { useSpring, animated } from 'react-spring'
import classes from './RocketAnimated.module.scss';

export interface RocketAnimatedProps {
    isAction?: boolean;
    handleClick?: () => void;
    onAnimationEnd?: () => void;
    isLobby?: boolean;
    applicationHeight?: number;
    isRocketExplosion?: boolean;
}

export const RocketAnimated: FC<RocketAnimatedProps> = ({
  isAction= false,
  handleClick = () => {},
  onAnimationEnd = () => {},
  isLobby = false,
  applicationHeight= 0,
  isRocketExplosion = false
}) => {

    const [isSurfing, setIsSurfing] = useState(false);

    const onLaunchEnd = () => {
        if (isSurfing) {
            onAnimationEnd();
            return;
        }
        setIsSurfing(true);
    };

    //isLobby ? calculates height enough for rocket to leave the screen considering rocket div is 30% from the bottom
    //else ? calculates height enough for rocket to stay inside game container knowing rocket has 50% of container space above it
    const rocketMaxHeightOnScreen = isLobby ? applicationHeight - 0.3*applicationHeight + 100 : 0.35*applicationHeight;
    //calculates how low will rocket get before takeoff
    const rocketPrepareForTakeoffHeight = 0.05*applicationHeight;

    const rocketSurfStyles = useSpring({
        from: {transform:  `${'translateY(' + (isSurfing ? rocketPrepareForTakeoffHeight + 'px' : '0px') + ')'}`},
        to: {transform:  `${'translateY(' + (isSurfing ? '-' + rocketMaxHeightOnScreen + 'px' : (isAction ? rocketPrepareForTakeoffHeight + 'px' : '0px')) + ')'}`},
        config: {mass: 6, duration: 1000},
        onRest: () => { onLaunchEnd() }
    })

    const startExplosionStyles = useSpring({
        from: {opacity: 0, transform: "translateY(0px)"},
        to: [{opacity: isAction && !isSurfing ? 1 : 0, transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
            {opacity: 0}],
        config: {mass: 6, duration: 100},
    })

    const endExplosionStyles = useSpring({
        from: {opacity: 0},
        to: [{opacity: isRocketExplosion ? 1 : 0}, {opacity: 0}],
        config: {mass: 6, duration: 500},
    })

    return (
        <div className={classes.rocketContainer}>
            { !isLobby ? (
                <animated.div className={classes.endExplosion} style={ endExplosionStyles }>
                    <img
                        src={endExplosion}
                    />
                </animated.div>
            ) : null
            }

            <animated.div className={classes.rocketMain} style={ rocketSurfStyles }>
                <img
                    src={rocket}
                    alt='HeyHouston Rocket'
                    onClick={handleClick}
                />
            </animated.div>

            { !isLobby ? (
                <animated.div className={classes.startExplosion} style={{...startExplosionStyles}}>
                    <img
                        src={startExplosion}
                    />
                </animated.div>
            ) : null
            }
        </div>

    );
};
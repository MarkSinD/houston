import {FC, useState} from "react";
import rocket from "../../assets/images/rocket.png";
import startExplosion from "../../assets/gifs/start-explosion.gif";
import { useSpring, animated } from 'react-spring'
import classes from './RocketAnimated.module.scss';

export interface RocketAnimatedProps {
    isAction?: boolean;
    handleClick?: () => void;
    onAnimationEnd?: () => void;
    isLobby?: boolean;
    durationSeconds?: number;
    applicationHeight?: number;
}

export const RocketAnimated: FC<RocketAnimatedProps> = ({
  isAction= false,
  handleClick = () => {},
  onAnimationEnd = () => {},
  isLobby = false,
  durationSeconds = 1,
  applicationHeight= 1915
}) => {

    const [isSurfing, setIsSurfing] = useState(false);

    const onLaunchEnd = () => {
        if (isSurfing) {
            onAnimationEnd();
            return;
        }
        setIsSurfing(true);
    };

    //calculates height enough for rocket to leave the screen considering rocket div is 30% from the bottom
    const rocketMaxHeightOnScreen = applicationHeight - 0.3*applicationHeight + 100;
    //calculates how low will rocket get before takeoff
    const rocketPrepareForTakeoffHeight = 0.05*applicationHeight;

    const rocketSurfStyles = useSpring({
        from: {transform:  `${'translateY(' + (isSurfing ? rocketPrepareForTakeoffHeight + 'px' : '0px') + ')'}`},
        to: {transform:  `${'translateY(' + (isSurfing ? '-' + rocketMaxHeightOnScreen + 'px' : (isAction ? rocketPrepareForTakeoffHeight + 'px' : '0px')) + ')'}`},
        config: {mass: 6, duration: 1000},
        onRest: () => { onLaunchEnd() }
    })

    const explosionStyles = useSpring({
        from: {opacity: 0, transform: "translateY(0px)"},
        to: [{opacity: isAction ? 1 : 0, transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
            {opacity: 0}],
        config: {mass: 6, duration: 100},
    })

    return (
        <div className={classes.rocketContainer}>
            <animated.div className={classes.rocketMain} style={ rocketSurfStyles }>
                <img
                    src={rocket}
                    alt='HeyHouston Rocket'
                    onClick={handleClick}
                />
            </animated.div>

            { !isLobby ? (
                <animated.div className={classes.startExplosion} style={{...explosionStyles}}>
                    <img
                        src={startExplosion}
                    />
                </animated.div>
            ) : null
            }
        </div>

    );
};
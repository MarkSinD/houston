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
}

export const RocketAnimated: FC<RocketAnimatedProps> = ({
  isAction= false,
  handleClick = () => {},
  onAnimationEnd = () => {},
  isLobby = false,
  durationSeconds = 0.5
}) => {

    const [isSurfing, setIsSurfing] = useState(false);

    const onLaunchEnd = () => {
        if (isSurfing) {
            onAnimationEnd();
            return;
        }
        setIsSurfing(true);
    };

    const rocketSurfStyles = useSpring({
        from: {transform:  `${'translateY(' + (isSurfing ? '50px' : '0px') + ')'}`},
        to: {transform:  `${'translateY(' + (isSurfing ? '-700px' : (isAction ? '50px' : '0px')) + ')'}`},
        config: {mass: 6, duration: 1000},
        onRest: () => { onLaunchEnd() }
    })

    const explosionStyles = useSpring({
        from: {opacity: 0, transform: "translateY(0px)"},
        to: [{opacity: 1, transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
            {opacity: 0}],
        config: {mass: 6, duration: 500},
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

            { !isLobby && isAction ? (
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
import {FC} from "react";
import rocket from "../../assets/images/rocket.png";
import startExplosion from "../../assets/gifs/start-explosion.gif";
import { useSpring, animated } from 'react-spring'
import classes from './RocketAnimated.module.scss';

export interface RocketAnimatedProps {
    isAction?: boolean;
    handleClick?: () => void;
    onAnimationEnd?: () => void;
}

export const RocketAnimated: FC<RocketAnimatedProps> = ({
  isAction= false,
  handleClick = () => {},
  onAnimationEnd = () => {}
}) => {

    const rocketStyles = useSpring({
        from: {transform: "translateY(0px)"},
        //to: [{transform: "translateY(0px}"}],
        to: [{transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
            {transform: `${'translateY(' + (isAction ? '-700px' : '0px') + ')'}`}],
        config: {mass: 6, duration: 1000},
        onRest: () => { onAnimationEnd() }
    })

    // const explosionStyles = useSpring({
    //     from: {opacity: 0, transform: "translateY(0px)"},
    //     to: [{opacity: 1, transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
    //         {opacity: 0}],
    //     config: {mass: 6, duration: 500},
    // })

    return (
        <div className={classes.rocketContainer}>
            <animated.div className={classes.rocketMain} style={{...rocketStyles}}>
                <img
                    src={rocket}
                    alt='HeyHouston Rocket'
                    onClick={handleClick}
                />
            </animated.div>

            {/*<animated.div className={classes.startExplosion} style={{...explosionStyles}}>*/}
            {/*    <img*/}
            {/*        src={startExplosion}*/}
            {/*    />*/}
            {/*</animated.div>*/}
        </div>

    );
};
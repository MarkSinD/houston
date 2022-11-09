import {FC} from "react";
import rocket from "../../assets/images/rocket.png";
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

    const styles = useSpring({
        from: {transform: "translateY(0px)"},
        //to: [{transform: "translateY(0px}"}],
        to: [{transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
            {transform: `${'translateY(' + (isAction ? '-700px' : '0px') + ')'}`}],
        config: {mass: 6, duration: 1000},
        onRest: () => { onAnimationEnd() }
    })

    return (
        <animated.div className={classes.rocketMain} style={{...styles}}>
            <img
                src={rocket}
                alt='HeyHouston Rocket'
                onClick={handleClick}
            />
        </animated.div>
    );
};
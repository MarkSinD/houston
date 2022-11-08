import {FC} from "react";
import rocket from "../assets/images/rocket.png";
import { useSpring, animated } from 'react-spring'

export interface RocketAnimatedProps {
    isAction?: boolean;
    handleClick?: () => void;
}

export const RocketAnimated: FC<RocketAnimatedProps> = ({
  isAction= false,
  handleClick = () => {}
}) => {

    const styles = useSpring({
        from: {transform: "translateY(0px)"},
        //to: [{transform: "translateY(0px}"}],
        to: [{transform: `${'translateY(' + (isAction ? '50px' : '0px') + ')'}`},
            {transform: `${'translateY(' + (isAction ? '-700px' : '0px') + ')'}`}],
        config: {mass: 6, duration: 1000}
    })

    return (
        <animated.div className='rocket-main' style={{...styles}}>
            <img
                src={rocket}
                alt='HeyHouston Rocket'
                onClick={handleClick}
            />
        </animated.div>
    );
};
import {FC} from "react";
import scale from "../../assets/images/scale.png";
import classes from "../BetCoefficientScale/BetCoefficientScale.module.scss";
import {animated, useSpring} from "react-spring";

export interface BetCoefficientScaleProps {
    isAction?:boolean;
}

const BetCoefficientScale : FC<BetCoefficientScaleProps> = ({
  isAction = true,
}) => {
    const applicationHeight = document.documentElement?.clientHeight ? document.documentElement.clientHeight : 0;
    const maxHeight = 0.7*applicationHeight;

    const scaleStyles = useSpring({
        from: {transform:  "translateY('0px')"},
        to: {transform:  `${'translateY(' + (isAction ? '-' + maxHeight + 'px' : '0px') + ')'}`},
        config: {mass: 6, duration: 3000}
    })

    return(
        <>
            <animated.div className={classes.betCoefficient} style={ scaleStyles }>
                <span>{'x' + '1.0'}</span>
            </animated.div>

            <img
                src={scale}
            />
        </>
    );
};

export default BetCoefficientScale;

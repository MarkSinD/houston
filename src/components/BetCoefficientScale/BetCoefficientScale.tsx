import {FC} from "react";
import scale from "../../assets/images/scale.png";
import classes from "../BetCoefficientScale/BetCoefficientScale.module.scss";
import {animated, useSpring} from "react-spring";
import CountUp from 'react-countup';


export interface BetCoefficientScaleProps {
    isAction?: boolean;
    coefficient: number;
}

const BetCoefficientScale : FC<BetCoefficientScaleProps> = ({
  isAction = true,
  coefficient = 0,
}) => {
    const applicationHeight = document.documentElement?.clientHeight ? document.documentElement.clientHeight : 0;
    const maxHeight = 0.4*applicationHeight;

    const scaleStyles = useSpring({
        from: {transform:  "translateY('0px')"},
        to: {transform:  `${'translateY(' + (isAction ? '-' + maxHeight + 'px' : '0px') + ')'}`},
        config: {mass: 6, duration: 1000}
    }, );

    return(
        <>
            <animated.div className={classes.betCoefficient} style={ scaleStyles }>
                <CountUp
                    start={0}
                    end={isAction ? coefficient : 0}
                    duration={coefficient}
                    decimals={2}
                    decimal=","
                    prefix={"x"}
                />
            </animated.div>

            <img
                src={scale}
            />
        </>
    );
};

export default BetCoefficientScale;

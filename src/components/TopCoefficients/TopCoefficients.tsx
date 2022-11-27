import {FC} from "react";
import classes from './TopCoefficients.module.scss';
import topPanel from "../../assets/images/left-column/top-panel.png";

export interface TopCoefficientsProps {
}

const TopCoefficients : FC<TopCoefficientsProps> = ({
}) => {
    return (
        <div className={classes.topCoefficientsContainer}>
            <img src={topPanel}/>
        </div>
    );
};

export default TopCoefficients;

import {FC} from "react";
import classes from "./BetPanel.module.scss";

export interface BetPanelProps {
    autoBetValue?: number;
}

const BetPanel : FC<BetPanelProps> = ({
  autoBetValue = 0
}) => {

    return (
        <>
            <div className={classes.betBar}>

            </div>
        </>
    );
};

export default BetPanel;

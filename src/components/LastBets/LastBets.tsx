import {FC} from "react";
import classes from './LastBets.module.scss';
import betsPanel from "../../assets/images/left-column/bets-panel.png";

export interface LastBetsProps {
}

const LastBets : FC<LastBetsProps> = ({
                                                    }) => {
    return (
        <div className={classes.lastBetsContainer}>
            <img src={betsPanel}/>
        </div>
    );
};

export default LastBets;
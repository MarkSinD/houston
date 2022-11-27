import {FC} from "react";
import classes from './LastBets.module.scss';

export interface LastBetsProps {
}

const LastBets : FC<LastBetsProps> = ({
                                                    }) => {
    return (
        <div className={classes.lastBetsContainer}>
        </div>
    );
};

export default LastBets;
import {FC, useState} from "react";
import classes from "./BetPanel.module.scss";
import autoBetTile from "../../assets/images/playable-panel/auto-bet-tile.png";

export interface BetPanelProps {
    autoBetValue?: number;
}

const BetPanel : FC<BetPanelProps> = ({
  autoBetValue = 0
}) => {

    //betBar takes 90% of width => 5% makes us start where the bar starts
    const selectedAutoBetTileLeftMargin = 5 + (autoBetValue === 0 ? 0 : (autoBetValue/10-10) * 0.9);
    const betBarValueLeftMargin = autoBetValue === 0 ? 0 : autoBetValue/10-10;
    const [isAutobetChecked, setIsAutobetChecked] = useState(false);

    const onAutoBetChecked = () => {
        if (isAutobetChecked) {
            setIsAutobetChecked(false);
            return;
        }
        setIsAutobetChecked(true);
    };

    return (
        <div className={classes.betPanelContainer}>
            <div className={classes.selectedAutoBetTile}
                 style={{opacity: autoBetValue === 0 ? 0 : 1, marginLeft: selectedAutoBetTileLeftMargin + '%'}}
            >
                <span>{autoBetValue}</span>
                <img
                    src={autoBetTile}
                />
            </div>
            <div className={classes.betBarContainer}>
                <span>min</span>
                <div className={classes.betBar}>
                    { autoBetValue === 0 ? null : (
                        <div className={classes.betBarValue}
                             style={{marginLeft: betBarValueLeftMargin + '%'}}
                        />
                    )}
                </div>
                <span>max</span>
            </div>
            <div className={classes.betCheckBoxesSingleMode}>
                <div className={classes.betCheckBox}>
                    <span>auto-bet</span>
                    <div className={classes.autoBetCheckBoxImg}>
                        <span>{autoBetValue === 0 ? 100 : autoBetValue}</span>
                        <img src={autoBetTile}/>
                    </div>
                    <label className={classes.autoBetToggle}
                           style={{backgroundColor: isAutobetChecked ? '#08d3ff' : '#003564'}}>
                        <input type="checkbox" onChange={onAutoBetChecked}/>
                        <span className={classes.slider}
                              style={{backgroundColor: isAutobetChecked ? '#08d3ff' : '#003564'}}
                        />
                        <span className={classes.labels} data-on="ON" data-off="OFF"/>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BetPanel;

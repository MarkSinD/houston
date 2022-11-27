import {FC, useState} from "react";
import startButton from "../../assets/images/playable-panel/start-button.png";
import stopButton from "../../assets/images/playable-panel/start-button.png";  //todo сменить на кнопку стоп
import panel from "../../assets/images/playable-panel/playable-panel.png";
import plusBet from "../../assets/images/playable-panel/plus-bet.png";
import classes from './PlayablePanel.module.scss';
import BetPanel from "../BetPanel/BetPanel";

export interface PlayablePanelProps {
    handleStartClick?: () => void;
    isRoundStarted?: boolean;
}

const PlayablePanel : FC<PlayablePanelProps> = ({
  handleStartClick = () => {},
  isRoundStarted = false
}) => {
    const [isStartClicked, setIsStartClicked] = useState(false);
    const [isSingleBetMode, setIsSingleBetMode] = useState(true);
    const autoBets = [100, 200, 300, 400, 1000];
    const [autoBetLeft, setAutoBetLeft] = useState(0);

    const tiles = autoBets.map((autoBet, index) =>
        <div
            className={classes.autoBetTile + ' ' + (autoBetLeft === autoBet ? classes.selected : '')}
            onClick={() => {
                onAutoBetTileClick(autoBet);
            }}
        >
            <span>
                {autoBet}
            </span>
        </div>
    );

    const onStartClick = () => {
        if (isStartClicked) {
            return;
        }
        setIsStartClicked(true);
        handleStartClick();
    };

    const onPlusBetClick = () => {
        setIsSingleBetMode(false);
    };

    const onAutoBetTileClick = (autoBet: number) => {
        setAutoBetLeft(autoBet);
    };

    return (
        <> { isSingleBetMode ? (
            <div className={classes.playablePanelContainer + ' ' + (isStartClicked ? classes.buttonDisabled : '')}>
                <img
                    src={isRoundStarted ? stopButton : startButton}
                    onClick={() => {
                        onStartClick();
                    }}
                    style={{width: '15%'}}
                />
                <div className={classes.betPanel}>
                    <div className={classes.autoBetTiles}>
                        {tiles}
                    </div>
                    <div className={classes.betPanelContainer}>
                        <BetPanel
                            autoBetValue={autoBetLeft}
                        />
                    </div>
                </div>
                <img
                    src={plusBet}
                    style={{width: '15%', padding: '4%'}}
                    onClick={() => {
                        onPlusBetClick();
                    }}
                />
            </div>
        ) : (
            <div className={classes.playablePanelContainer + ' ' + (isStartClicked ? classes.buttonDisabled : '')}>
                <img
                    src={isRoundStarted ? stopButton : startButton}
                    onClick={() => {
                        onStartClick();
                    }}
                    style={{width: '15%'}}
                />
                <img
                    src={panel}
                    style={{width: '70%'}}
                />
                <img
                    src={isRoundStarted ? stopButton : startButton}
                    onClick={() => {
                        onStartClick();
                    }}
                    style={{width: '15%'}}
                />
            </div>
        )
        }
        </>
    );

};

export default PlayablePanel;
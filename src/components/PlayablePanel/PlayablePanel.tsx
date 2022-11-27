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
    const [autoBetRight, setAutoBetRight] = useState(0);

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

    const onAutoBetLeftTileClick = (autoBet: number) => {
        if (autoBet === autoBetLeft) {
            setAutoBetLeft(0);
            return;
        }
        setAutoBetLeft(autoBet);
    };

    const onAutoBetRightTileClick = (autoBet: number) => {
        if (autoBet === autoBetRight) {
            setAutoBetRight(0);
            return;
        }
        setAutoBetRight(autoBet);
    };

    const getBetTiles = (selectedAutoBet: number, isRight: boolean) => {
        const tiles = autoBets.map((autoBet, index) =>
            <div
                className={classes.autoBetTile + ' ' + (selectedAutoBet === autoBet ? classes.selected : '')}
                onClick={() => {
                    isRight ? onAutoBetRightTileClick(autoBet) : onAutoBetLeftTileClick(autoBet);
                }}
            >
            <span>
                {autoBet}
            </span>
            </div>
        );
        return tiles;
    };

    return (
        <>
            { isSingleBetMode ? (
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
                        {getBetTiles(autoBetLeft, false)}
                    </div>
                    <div className={classes.betPanelContainer}>
                        <BetPanel
                            autoBetValue={autoBetLeft}
                            isSingleBetMode={isSingleBetMode}
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
                <div className={classes.betPanel}>
                    <div className={classes.autoBetTilesNonSingleMode}>
                        <div className={classes.autoBetTiles}>
                            {getBetTiles(autoBetLeft, false)}
                        </div>
                        <div className={classes.autoBetTiles}>
                            {getBetTiles(autoBetRight, true)}
                        </div>
                    </div>
                    <div className={classes.betPanelContainer + ' ' + (isSingleBetMode ? '' : classes.nonSingleMode)}>
                        <BetPanel
                            autoBetValue={autoBetLeft}
                            isSingleBetMode={isSingleBetMode}
                        />
                        <BetPanel
                            autoBetValue={autoBetRight}
                            isSingleBetMode={isSingleBetMode}
                        />
                    </div>
                </div>
                <img
                    src={isRoundStarted ? stopButton : startButton}
                    onClick={() => {
                        onStartClick();
                    }}
                    style={{width: '15%'}}
                />
            </div>
        )}
        </>
    );

};

export default PlayablePanel;
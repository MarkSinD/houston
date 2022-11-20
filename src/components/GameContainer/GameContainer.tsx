import {RocketAnimated} from "../RocketAnimated/RocketAnimated";
import {FC, useState} from "react";
import classes from './GameContainer.module.scss';
import startButton from "../../assets/images/start-button.png";
import BetCoefficientScale from "../BetCoefficientScale/BetCoefficientScale";

export interface GameContainerProps {
    moveBackgroundOnRocketLaunched?: (isMoving: boolean) => void;
    applicationHeight?: number;
}

const GameContainer : FC<GameContainerProps> = ({
  moveBackgroundOnRocketLaunched = () => {},
  applicationHeight = 0
}) => {
    const [isRocketAction, setIsRocketAction] = useState(false);
    const [countdown, setCountdown] = useState(-1);
    const [isRocketExplosion, setIsRocketExplosion] = useState(false);

    const handleStartRound = () => {
        const countDownStart = 3;
        for (let i = 0; i <= countDownStart; i++) {
            setTimeout(() => {
                setCountdown(countDownStart-i);
                if (i === countDownStart) {
                    setIsRocketAction(true);
                    moveBackgroundOnRocketLaunched(true);
                    setTimeout(() => {setCountdown(-1) }, 1000);
                }
             }, 1000 * (i + 1));
        }
    };

    const handleRocketFlightDuration = () => {
        if (!isRocketAction) return;
        // todo сколько секунд будет лететь ракета:
        const durationSeconds = 5;
        setTimeout(() => {
            setIsRocketExplosion(true);
        }, durationSeconds * 1000)
    }

    return(
        <>
            <div className={classes.gamePlayableContainer}>
                <div className={classes.roundTimer}>
                    <span style={{opacity: countdown === -1 ? 0 : 1}}>{ countdown === 0 ? 'Go!' : countdown }</span>
                </div>

                <div className={classes.rocketGame}>
                    <RocketAnimated
                        applicationHeight={applicationHeight}
                        isAction={isRocketAction}
                        onAnimationEnd={() => {
                            handleRocketFlightDuration()
                        }}
                        isRocketExplosion={isRocketExplosion}
                    />
                </div>

                <div className={classes.playablePanelContainer}>
                    <img
                        src={startButton}
                        onClick={() => {
                            handleStartRound();
                        }}
                    />
                </div>
            </div>

            <div className={classes.gameCoefficientScale}>
                <BetCoefficientScale
                    applicationHeight={applicationHeight}
                    isAction={isRocketAction}
                />
            </div>
        </>

    );
};

export default GameContainer;
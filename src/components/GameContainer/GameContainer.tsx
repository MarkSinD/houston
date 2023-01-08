import {RocketAnimated} from "../RocketAnimated/RocketAnimated";
import {FC, useState} from "react";
import classes from './GameContainer.module.scss';
import BetCoefficientScale from "../BetCoefficientScale/BetCoefficientScale";
import PlayablePanel from "../PlayablePanel/PlayablePanel";
import Countdown from "../Countdown/Countdown";

export interface GameContainerProps {
    moveBackgroundOnRocketLaunched?: (isMoving: boolean) => void;
}

const GameContainer : FC<GameContainerProps> = ({
  moveBackgroundOnRocketLaunched = () => {},
}) => {
    const [isCountdown, setIsCountdown] = useState(false);
    const [isRocketAction, setIsRocketAction] = useState(false);
    const [isRocketExplosion, setIsRocketExplosion] = useState(false);

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
                <Countdown
                    callback={() => {
                        setIsRocketAction(true);
                        moveBackgroundOnRocketLaunched(true);
                        setIsCountdown(false);
                    }}
                    isStarted={isCountdown}
                />

                <div className={classes.rocketGame}>
                    <RocketAnimated
                        isAction={isRocketAction}
                        onAnimationEnd={() => {
                            handleRocketFlightDuration()
                        }}
                        isRocketExplosion={isRocketExplosion}
                    />
                </div>

                <div className={classes.playablePanelContainerWrapper}>
                    <PlayablePanel
                        handleStartClick={() => setIsCountdown(true)}
                        isRoundStarted={isRocketAction}
                    />
                </div>
            </div>

            <div className={classes.gameCoefficientScale}>
                <BetCoefficientScale
                    isAction={isRocketAction}
                />
            </div>
        </>

    );
};

export default GameContainer;
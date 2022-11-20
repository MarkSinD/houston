import {RocketAnimated, RocketAnimatedProps} from "../RocketAnimated/RocketAnimated";
import {FC, useState} from "react";
import classes from './GameContainer.module.scss';
import startButton from "../../assets/images/start-button.png";

export interface GameContainerProps {
    moveBackgroundOnRocketLaunched?: () => void;
    applicationHeight?: number;
}

const GameContainer : FC<GameContainerProps> = ({
  moveBackgroundOnRocketLaunched = () => {},
  applicationHeight = 1915
}) => {
    const [isRocketAction, setIsRocketAction] = useState(false);

    const onAnimationEnd = () => {
        if (!isRocketAction) return;
    };

    return(
        <>
            <div className={classes.roundTimer}>
                <span>{3}</span>
            </div>

            <div className={classes.rocketGame}>
                <RocketAnimated
                    applicationHeight={applicationHeight}
                    isAction={isRocketAction}
                    onAnimationEnd={() => {
                        onAnimationEnd()
                    }}
                    // todo сколько секунд будет лететь ракета:
                    durationSeconds={5}
                />
            </div>

            <div className={classes.playablePanelContainer}>
                {/* todo игровая панелька, сетнуть тут setIsRocketAction */}
                <img
                    src={startButton}
                    onClick={() => {
                        setIsRocketAction(true)
                        moveBackgroundOnRocketLaunched()
                    }}
                />
            </div>
        </>
    );
};

export default GameContainer;
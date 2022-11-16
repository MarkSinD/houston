import {RocketAnimated} from "../RocketAnimated/RocketAnimated";
import {useState} from "react";
import classes from './GameContainer.module.scss';

const GameContainer = () => {
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
                    isAction={isRocketAction}
                    onAnimationEnd={() => {
                        onAnimationEnd()
                    }}
                />
            </div>

            <div className={classes.playablePanelContainer}>
                {/* todo игровая панелька, сетнуть тут setIsRocketAction */}
            </div>
        </>
    );
};

export default GameContainer;
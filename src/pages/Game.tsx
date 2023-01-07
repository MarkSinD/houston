import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";
import {GameSettings} from "../components/GameSettings/GameSettings";
import {BetRoofTiles} from "../components/BetRoofTiles/BetRoofTiles";
import GameContainer from "../components/GameContainer/GameContainer";
import {useRef, useState} from "react";
import TopBets from "../components/TopCoefficients/TopCoefficients";
import LastBets from "../components/LastBets/LastBets";

const Game = () => {
    const [isRocketLaunched, setIsRocketLaunched] = useState(false);

    const moveBackgroundOnRocketLaunched = (isMoving: boolean) => {
        setIsRocketLaunched(isMoving);
    };

    const appDiv = useRef<HTMLDivElement>(null);

    return(
        <>
            <ApplicationBackground
                isRocketLaunched={isRocketLaunched}
                applicationHeight={appDiv?.current?.clientHeight}
            >
                <div className='game-wrapper' ref={appDiv}>

                    <div className='game-roof-row'>
                        <div className='game-roof-tiles'>
                            <BetRoofTiles/>
                        </div>
                        <div className='game-settings'>
                            <GameSettings/>
                        </div>
                    </div>

                    <div className='game-middle-row'>
                        <div className='game-left-column'>
                            <TopBets/>
                            <LastBets/>
                        </div>
                        <div className='game-playable-container-wrapper'>
                            <GameContainer
                                moveBackgroundOnRocketLaunched={(isMoving: boolean) => {
                                    moveBackgroundOnRocketLaunched(isMoving)
                                }}
                                applicationHeight={appDiv?.current?.clientHeight}
                            />
                        </div>
                        <div className='game-right-column'>

                        </div>
                    </div>

                </div>
            </ApplicationBackground>
        </>
    );
};

export default Game;
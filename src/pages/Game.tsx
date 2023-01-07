import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";
import {GameSettings} from "../components/GameSettings/GameSettings";
import {BetRoofTiles} from "../components/BetRoofTiles/BetRoofTiles";
import GameContainer from "../components/GameContainer/GameContainer";
import {useEffect, useRef, useState} from "react";
import TopBets from "../components/TopCoefficients/TopCoefficients";
import LastBets from "../components/LastBets/LastBets";

const Game = () => {
    const [isRocketLaunched, setIsRocketLaunched] = useState(false);
    const containerDiv = useRef<HTMLDivElement>(null);

    const moveBackgroundOnRocketLaunched = (isMoving: boolean) => {
        setIsRocketLaunched(isMoving);
    };

    useEffect(() => {
        const root = document.documentElement;
        const bgHeight = 6808;
        const bgWidth = 1915;
        const heightProportioned = root?.offsetWidth * bgHeight/bgWidth;
        const containerHeight = containerDiv?.current?.clientHeight ? containerDiv?.current?.clientHeight : 0;
        root?.style.setProperty("--slidedown-bg-height", (heightProportioned + containerHeight) + "px");
    }, []);

    return(
        <>
            <ApplicationBackground isRocketLaunched={isRocketLaunched}>
                <div className='game-wrapper' ref={containerDiv}>

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
                                applicationHeight={containerDiv?.current?.clientHeight}
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
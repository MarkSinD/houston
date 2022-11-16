import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";
import {GameSettings} from "../components/GameSettings/GameSettings";
import {BetRoofTiles} from "../components/BetRoofTiles/BetRoofTiles";
import GameContainer from "../components/GameContainer/GameContainer";

const GamePage = () => {
    return(
        <>
            <ApplicationBackground>
                <div className='game-wrapper'>

                    <div className='game-roof-row'>
                        <div className='game-settings'>
                            <GameSettings/>
                        </div>
                        <div className='game-roof-tiles'>
                            <BetRoofTiles/>
                        </div>
                    </div>

                    <div className='game-middle-row'>
                        <div className='game-left-column'>

                        </div>
                        <div className='game-playable-container'>
                            <GameContainer/>
                        </div>
                        <div className='game-right-column'>

                        </div>
                    </div>

                </div>
            </ApplicationBackground>
        </>
    );
};

export default GamePage;
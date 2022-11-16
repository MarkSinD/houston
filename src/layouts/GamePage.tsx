import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";
import {GameSettings} from "../components/GameSettings/GameSettings";
import {BetRoofTiles} from "../components/BetRoofTiles/BetRoofTiles";
import {RocketAnimated} from "../components/RocketAnimated/RocketAnimated";

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

                    </div>

                </div>
            </ApplicationBackground>
        </>
    );
};

export default GamePage;
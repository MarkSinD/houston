import {useState} from 'react';
import {ProgressBar} from "../components/ProgressBar/ProgressBar";
import {HoustonLogo} from "../components/HoustonLogo/HoustonLogo";
import {RocketAnimated} from "../components/RocketAnimated/RocketAnimated";
import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";

const LobbyPage = () => {

    const [isRocketAction, setIsRocketAction] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRocketClick = () => {
        setIsLoading(true);
    };

    return (
        <>
            <ApplicationBackground>
                    <div className='rocket-lobby-wrap'>
                        <RocketAnimated
                            isAction={isRocketAction}
                            handleClick={() => {
                                handleRocketClick()
                            }}
                        />
                    </div>
                    <div className='progress-lobby-wrapper'>
                        <ProgressBar
                            isLoading={isLoading}
                            animationTime={3}
                            onEnd={() => {
                                setIsRocketAction(true);
                            }}
                        />
                    </div>
            </ApplicationBackground>
        </>
    );
};

export default LobbyPage;
import {FC, useEffect, useState} from 'react';
import {ProgressBar} from "./ProgressBar";
import {HoustonLogo} from "./LobbyBackground";
import {RocketAnimated} from "./RocketAnimated";

const LobbyPage = () => {

    const [isRocketAction, setIsRocketAction] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRocketClick = () => {
        setIsLoading(true);
    };

    return (
        <>
            <div >
                <div className='desktop-wrapper'>
                    <div className='logo-main'>
                        <HoustonLogo/>
                    </div>
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
                </div>
                <div className='earth-footer '/>
            </div>
        </>
    );
};

export default LobbyPage;
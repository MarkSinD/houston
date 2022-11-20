import {useRef, useState} from 'react';
import {ProgressBar} from "../components/ProgressBar/ProgressBar";
import {RocketAnimated} from "../components/RocketAnimated/RocketAnimated";
import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";
import { useNavigate } from "react-router-dom";

const LobbyPage = () => {
    const navigate = useNavigate();

    const [isRocketAction, setIsRocketAction] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRocketClick = () => {
        setIsLoading(true);
    };

    const onAnimationEnd = () => {
        if (!isRocketAction) return;
        navigate('/game');
    };

    const appDiv = useRef<HTMLDivElement>(null);

    return (
        <>
            <ApplicationBackground isLobby={true}>
                    <div className='rocket-lobby-wrap' ref={appDiv}>
                        <RocketAnimated
                            isAction={isRocketAction}
                            handleClick={() => {
                                handleRocketClick()
                            }}
                            onAnimationEnd={() => {
                                onAnimationEnd()
                            }}
                            isLobby={true}
                            applicationHeight={appDiv?.current?.clientHeight ? appDiv?.current?.clientHeight / 0.35 : 0}
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
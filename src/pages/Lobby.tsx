import {useState} from 'react';
import {ProgressBar} from "../components/ProgressBar/ProgressBar";
import {RocketAnimated} from "../components/RocketAnimated/RocketAnimated";
import {ApplicationBackground} from "../components/ApplicationBackground/ApplicationBackground";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
    const [isRocketAction, setIsRocketAction] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const onAnimationEnd = () => {
        if (!isRocketAction) return;
        navigate('/game');
    };

    return (
        <ApplicationBackground isLobby={true}>
            <div className='rocket-lobby-wrap'>
                <RocketAnimated
                    isAction={isRocketAction}
                    handleClick={() => {
                        setIsLoading(true)
                    }}
                    onAnimationEnd={() => {
                        onAnimationEnd()
                    }}
                    isLobby={true}
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
    );
};

export default Lobby;
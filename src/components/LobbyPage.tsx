import {FC, useEffect, useState} from 'react';
import {ProgressBar} from "./ProgressBar";
import {HoustonLogo} from "./LobbyBackground";
import {RocketAnimated} from "./RocketAnimated";

const LobbyPage = () => {

    const [isRocketAction, setIsRocketAction] = useState(false);

    return (
        <>
            <div >
                <div className='desktop-wrapper'>
                    <div style={{textAlign: 'center', marginTop: '5%'}}>
                        <HoustonLogo/>
                    </div>
                    <div style={{marginTop: '5%', zIndex: 2}}>
                        <RocketAnimated
                            isAction={isRocketAction}
                        />
                    </div>
                    <div style={{width: '40%', zIndex: 3, marginTop:'10%'}}>
                        <ProgressBar
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
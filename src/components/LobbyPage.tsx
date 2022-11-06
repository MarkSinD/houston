import {FC} from 'react';
import {ProgressBar} from "./ProgressBar";

const LobbyPage: FC = () => {

    return (
        <>
            <div className='desktop-wrapper'>
                <div style={{width: '100%', padding: '0 10% 0 10%'}}>
                    <ProgressBar
                        animationTime={5}
                    />
                </div>

            </div>
        </>
    );
};

export default LobbyPage;
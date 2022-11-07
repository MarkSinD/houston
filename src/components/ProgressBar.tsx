import React, {FC, useEffect, useRef, useState} from "react";

export interface ProgressBarProps {
    onEnd?: () => void;
    animationTime?: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  animationTime = 5,
  onEnd = () => {}
}) => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(100);
    }, []);

    const progressBar = useRef<HTMLDivElement>(null);
    useEffect(() => {
        progressBar.current?.addEventListener('transitionend', onEnd);
    }, [onEnd]);

    return (
        <div className='progress'>
            <div
                className='progressValue'
                style={{
                    transition: `width ${animationTime}s ease 0s`,
                    width: `${value}%`,
                }}
                ref={progressBar}
            />
        </div>
    );
};

import {HoustonLogo} from "../HoustonLogo/HoustonLogo";
import {DetailedHTMLProps, FC, HTMLAttributes, useEffect} from 'react';
import { CSSProperties } from '@material-ui/styles';
import classes from './ApplicationBackground.module.scss';

export interface ApplicationBackgroundProps {
    className?: string;
    styles?: CSSProperties;
    isLobby?: boolean;
    isRocketLaunched?: boolean;
    applicationHeight?: number;
}

export const ApplicationBackground: FC<
 ApplicationBackgroundProps &
 DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement
 >
> = ({ children, className = '', styles = {}, isLobby = false, isRocketLaunched = false, applicationHeight = 0, ...props }) => {

    const bgHeight = 6808;
    useEffect(() => {
        const root = document.documentElement;
        root?.style.setProperty("--win-height", applicationHeight + "px");
        root?.style.setProperty(
            "--slidedown-bg-height",
            (bgHeight + applicationHeight) + "px"
        );
    },);

    return (
        <>
            <div >
                <div className={isRocketLaunched && !isLobby ? classes.gameActionWrapper : classes.desktopWrapper}>
                    { isLobby ? (
                            <div className={classes.logoMain}>
                                <HoustonLogo/>
                            </div>
                        ) : null
                    }
                    {children}
                </div>
                <div className={isRocketLaunched && !isLobby ? classes.gameActionEarthFooter : classes.earthFooter}/>
            </div>
        </>
    );
};

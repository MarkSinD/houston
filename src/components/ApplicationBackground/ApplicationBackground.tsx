import {HoustonLogo} from "../HoustonLogo/HoustonLogo";
import {FC, PropsWithChildren, useEffect} from 'react';
import classes from './ApplicationBackground.module.scss';

export interface ApplicationBackgroundProps extends PropsWithChildren {
    isLobby?: boolean;
    isRocketLaunched?: boolean;
    applicationHeight?: number;
}

export const ApplicationBackground: FC<ApplicationBackgroundProps> = ({ isLobby = false, isRocketLaunched = false, applicationHeight = 0, children }) => {

    useEffect(() => {
        const root = document.documentElement;
        const bgHeight = 6808;
        const bgWidth = 1915;
        const heightProportioned = root?.offsetWidth * bgHeight/bgWidth;
        root?.style.setProperty("--win-height", applicationHeight + "px");
        root?.style.setProperty(
            "--slidedown-bg-height", (heightProportioned + applicationHeight) + "px"
        );
    }, []);

    return (
        <div>
            { isLobby ? (
            <div className={classes.desktopWrapper}>
                <div className={classes.logoMain}>
                    <HoustonLogo/>
                </div>
                {children}
            </div>
            ) : (
                <>
                    <div className={isRocketLaunched ? classes.desktopWrapper + ' ' + classes.gameActionWrapper : classes.desktopWrapper}>
                        {children}
                    </div>
                    <div className={isRocketLaunched ? classes.gameActionEarthFooter : classes.earthFooter}/>
                </>
            )}
        </div>
    );
};

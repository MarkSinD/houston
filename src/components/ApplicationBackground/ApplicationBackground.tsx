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

    useEffect(() => {
        const root = document.documentElement;
        const bgHeight = 6808;
        const bgWidth = 1915;
        const heightProportioned = root?.offsetWidth * bgHeight/bgWidth;
        root?.style.setProperty("--win-height", applicationHeight + "px");
        root?.style.setProperty(
            "--slidedown-bg-height", (heightProportioned + applicationHeight) + "px"
        );
    },);

    return (
        <>
            <div >
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
        </>
    );
};

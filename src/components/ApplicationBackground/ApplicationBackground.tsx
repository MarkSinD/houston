import {HoustonLogo} from "../HoustonLogo/HoustonLogo";
import {FC, PropsWithChildren} from 'react';
import classes from './ApplicationBackground.module.scss';

export interface ApplicationBackgroundProps extends PropsWithChildren {
    isLobby?: boolean;
    isRocketLaunched?: boolean;
}

export const ApplicationBackground: FC<ApplicationBackgroundProps> = ({
  isLobby = false,
  isRocketLaunched = false,
  children,
  }) => {

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

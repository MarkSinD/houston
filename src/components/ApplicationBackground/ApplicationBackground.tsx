import {HoustonLogo} from "../HoustonLogo/HoustonLogo";
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { CSSProperties } from '@material-ui/styles';
import classes from './ApplicationBackground.module.scss';

export interface ApplicationBackgroundProps {
    className?: string;
    styles?: CSSProperties;
    isLobby?: boolean;
}

export const ApplicationBackground: FC<
 ApplicationBackgroundProps &
 DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement
 >
> = ({ children, className = '', styles = {}, isLobby = false, ...props }) => {

    return (
        <>
            <div >
                <div className={classes.desktopWrapper}>
                    { isLobby ? (
                            <div className={classes.logoMain}>
                                <HoustonLogo/>
                            </div>
                        ) : null
                    }
                    {children}
                </div>
                <div className={classes.earthFooter}/>
            </div>
        </>
    );
};

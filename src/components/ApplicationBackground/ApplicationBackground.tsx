import {HoustonLogo} from "../HoustonLogo/HoustonLogo";
import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import { CSSProperties } from '@material-ui/styles';
import classes from './ApplicationBackground.module.scss';

export interface ApplicationBackgroundProps {
    className?: string;
    styles?: CSSProperties;
}

export const ApplicationBackground: FC<
 ApplicationBackgroundProps &
 DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement
 >
> = ({ children, className = '', styles = {}, ...props }) => {

    return (
        <>
            <div >
                <div className={classes.desktopWrapper}>
                    <div className={classes.logoMain}>
                        <HoustonLogo/>
                    </div>
                    {children}
                </div>
                <div className={classes.earthFooter}/>
            </div>
        </>
    );
};

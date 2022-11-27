import {FC} from "react";
import classes from './TopCoefficients.module.scss';
import {Bet} from "../../models/Bet";

export interface TopCoefficientsProps {
}

const TopCoefficients : FC<TopCoefficientsProps> = ({
}) => {

    const topList: Bet[] = [
        {userName: 'Alrabi94', coefficient: 12345, win: 234567},
        {userName: 'Megan@', coefficient: 8666, win: 213212},
        {userName: '1SS23', coefficient: 3220, win: 78221},
        {userName: 'User2433', coefficient: 2902, win: 1234879}
    ];

    const rows = topList.map((bet, index) =>
        <tr key={index}>
            <td>{bet.userName}</td>
            <td>{bet.coefficient}</td>
            <td>{bet.win}</td>
        </tr>
    );

    return (
        <div className={classes.topCoefficientsContainer}>
            <span>top</span>
            <table>
                <tr>
                    <th>User</th>
                    <th>Coeff</th>
                    <th>Win</th>
                </tr>
                {rows}
            </table>
        </div>
    );
};

export default TopCoefficients;

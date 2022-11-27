import {FC} from "react";
import classes from './LastBets.module.scss';
import {Bet} from "../../models/Bet";

export interface LastBetsProps {
}

const LastBets : FC<LastBetsProps> = ({
}) => {

    const lastBets: Bet[] = [
        {userName: 'Alrabi94', coefficient: 3, win: 1200, isTop: true},
        {userName: 'Megan@', coefficient: 23, win: 5755, isTop: false},
        {userName: '1SS23', coefficient: 3.2, win: 500, isTop: false},
        {userName: 'User2433', coefficient: 5.5, win: 300, isTop: false},
        {userName: 'user333', coefficient: 34, win: 3400, isTop: true},
        {userName: 'erwrwse', coefficient: 22, win: 100, isTop: false},
        {userName: 'wwwwww', coefficient: 8.6, win: 100, isTop: false}
    ];

    const rows = lastBets.map((bet, index) =>
        <tr key={index} className={bet.isTop ? classes.topBet : ''}>
            <td>{bet.userName}</td>
            <td>{bet.coefficient}</td>
            <td>{bet.win}</td>
        </tr>
    );

    return (
        <div className={classes.lastBetsContainer}>
            <span>bets</span>
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

export default LastBets;
import {FC} from "react";
import betTile from "../../assets/images/bet-tile.png";
import classes from './BetRoofTiles.module.scss';

export const BetRoofTiles: FC = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; //todo bet tiles loop
    const tiles = numbers.map((number) =>
        <img
            src={betTile}
            alt={'bet ' + number}
        />
    );

    return (
        <div className={classes.betRoofTilesContainer}>
            { tiles }
        </div>
    );
};
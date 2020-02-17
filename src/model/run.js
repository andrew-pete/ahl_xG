import xG from './model';
import { AHL_TO_NHL_SCALAR } from './constants';

export function doRun(gameData, useAdj = true) {
    gameData.forEach( (row, i) => {
        const previousShot = i > 0 ? gameData[i-1] : null;

        try {
            const expectedGoal = xG({...row, previousShot});
            const adjXG = Math.max(0, Math.min(1, expectedGoal * AHL_TO_NHL_SCALAR));
            row.xG = useAdj ? adjXG : expectedGoal;

            if (isNaN(row.xG)) {
                console.warn(`Issue with calculating xG for row: ${row}... Setting to 0`);
                row.xG = 0;
            }
        } catch (error) {
            throw `Error with row: ${row}`;
        }
        
    });

    return gameData;
}
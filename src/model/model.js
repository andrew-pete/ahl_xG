import { MODEL_CONSTANTS, REBOUND } from './constants';
import { normalize, normalizeReboundAngle } from './utils';

export default function xG({ x, y, shotType, previousShot }) {
    let { distance, angle } = normalize({ x, y });
    if (shotType === REBOUND) {
        angle = normalizeReboundAngle( { x, y }, previousShot);
    }
    const xG = modelFunc({ distance, angle }, shotType);

    return xG;
}

function modelFunc({ distance, angle }, shotType) {
    const E = Math.E;

    try {
        const { a, b, c, d } = MODEL_CONSTANTS[shotType];
        if (!(a && b && c && d)) {
            return 0;
        }

        return 1 - (1/(1 + E**(a * angle + b)) * 1/(1 + E**(c * distance + d)));
    } catch (error) {
        throw new Error(`Failed to retrieve model constants for shot-type ${shotType}`);
    }

}
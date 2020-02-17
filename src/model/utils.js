import { NET_COORDS, MAX_DISTANCE, MAX_ANGLE } from './constants';

/**
 * Returns distance and angle as normalized values in range [0, 1]
 * 
 * MAX_ANGLE is Pi/2 -- A right angle with net
 * MAX_DISTANCE is the distance from the net to the corner of the blue line
 */
export function normalize({ x, y }) {
    const theta = Math.abs(getAngleFromNet({ x,y }));
    const distance = Math.min(MAX_DISTANCE, getDistanceFromNet({ x,y }));

    return { distance: distance / MAX_DISTANCE, angle: theta / MAX_ANGLE };
}

export function normalizeReboundAngle(p0, p1) {
    return Math.min(Math.pi, getAngleDelta(p0, p1))/Math.pi;
}

function getAngleDelta({ x: x0, y: y0 }, { x: x1, y: y1 }) {
    const theta0 = getAngleFromNet({ x: x0, y: y0 });
    const theta1 = getAngleFromNet({ x: x1, y: y1 });

    return Math.abs(theta1 - theta0);
}

function getAngleFromNet({ x, y }) {
    return Math.abs(x) < NET_COORDS.x
        ? Math.atan(y / (NET_COORDS.x - Math.abs(x)))
        : Math.sign(y) * Math.PI/2
}

function getDistanceFromNet({ x, y }) {
    const dx = NET_COORDS.x - Math.abs(x);
    const dy = y;
    return Math.sqrt(dx*dx + dy*dy);
}

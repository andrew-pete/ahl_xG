export function preProcess(data) {
    return new Promise(function(resolve) {
        const newData = data
            .map(updateHeaders)
            .map(updateCoordinates);

        resolve(newData);
    });
}

export function prettyPrint(json) {
    console.log(JSON.stringify(json, null, 4));
}

function updateHeaders(row) {
    return Object.entries(row).reduce(function(acc, [key, value], i) {
        acc[JSON_HEADERS[i]] = value;
        return acc;
    }, {});
}

function updateCoordinates(row) {
    const { x, y } = row;
    // Inches -> Feet
    row.x = parseFloat(x)/12;
    row.y = parseFloat(y)/12;

    row.isRebound = !!row.isRebound;

    return row;
}

const JSON_HEADERS = ['shotIndex', 'x', 'y', 'phantoms', 'opponents', "shooter", 'player1', 'player2', 'player3', 'player4', 'player5', 'shotType', 'isRebound'];


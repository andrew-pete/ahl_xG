const csv = require('csv-parser');
const fastcsv = require('fast-csv');
const fs = require('fs');


export function getCSV(filePath) {
    return new Promise(resolve => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => data.push(row))
            .on('end', () => {
                console.log(`CSV file successfully read`);
                resolve(data);
            });
    });
}

export function writeCSV(path, data) {
    const ws = fs.createWriteStream(path)

    fastcsv
        .write(data, {headers: true})
        .pipe(ws);

}

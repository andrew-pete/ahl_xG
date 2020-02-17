import { getCSV, writeCSV } from './src/utils/fileUtils';
import { preProcess } from './src/utils/jsonUtils';
import { doRun } from './src/model/run';
import fs from 'fs';


(function() {
    const rawDataPath = `./data/raw/`;
    const writeDir = `./data/xG/`;

    fs.readdir(rawDataPath, function(err, files) {
        files.filter(file => file.endsWith('.csv'))
            .forEach(file => {
                const filePath = rawDataPath + file;
                const writeFilePath = `${writeDir}${file}_xG`;
                
                getCSV(filePath).then(preProcess).then(data => {
                    const xGData = doRun(data);
                    writeCSV(writeFilePath, xGData)
                });
            })
    });
    
})();
// Create an instance for XlsParser
const parser = new (require('simple-excel-to-json').XlsParser)();
const doc = parser.parseXls2Json('./test-data.xlsx', { isNested: true });
const fs = require('fs');

//print the data of the first sheet
console.log(doc[0]);

const jsonString = JSON.stringify(doc[0]);

console.log(jsonString)

const filePath = 'output.json';

fs.writeFile(filePath, jsonString, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing to file:', err);
      return;
    }
    console.log('JSON data has been written to', filePath);
  });
  
const fs = require('fs');
const xlsx = require('node-xlsx');
const Helper = require('./helpers/helpers');
const PRIVATE = '/Users/jakobbellamy/Dev/simplestXLSXtoJSON/src/private';

exports.jsonMaker = async (req, res) => {
  let xArr = req.body.xls.split(',');
  let EXT = xArr[0].includes('csv') ? 'csv' : 'xlsx';
  let buff = new Buffer.from(xArr[1], 'base64');
  fs.writeFile(`src/private/test.${EXT}`, buff, (err, result) => {
    if(err){
      console.log('error: ', err);
    }
  }, () => {
    //callback: parse file
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${PRIVATE}/test.${EXT}`));
    //initialize empty data object then fill with sheets
    let sheetsArr = {};
    for(let i=0; i<workSheetsFromBuffer.length; i++){
      let sheet = workSheetsFromBuffer[i];
      //DEFINE VALUE PAIRS WITHIN SHEET
      sheetsArr[`${sheet.name}`] = Helper.columnObjectParser(sheet.data);
    };
    res.status(200).json(sheetsArr);
  });
};

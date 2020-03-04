const fs = require('fs');
const xlsx = require('node-xlsx');
const Helper = require('./helpers/helpers');
const PRIVATE = '/Users/jakobbellamy/Dev/simplestXLSXtoJSON/src/private';

exports.columnObjectParser = async (req, res) => {
  let [header, data] = req.body.xls.split(',');
  let EXT = header.includes('csv') ? 'csv' : 'xlsx';
  let buff = new Buffer.from(data, 'base64');
  fs.writeFile(`src/private/test.${EXT}`, buff, (err, result) => {
    if(err){
      console.log('error: ', err);
    };
  }, function() {
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${PRIVATE}/test.${EXT}`));
    let jsonObject = {};
    for(let i=0; i<workSheetsFromBuffer.length; i++){
      let sheet = workSheetsFromBuffer[i];
      jsonObject[`${sheet.name}`] = Helper.columnObjectParser(sheet.data);
    };
    res.status(200).json(jsonObject);
  });
};

exports.rowObjectParser = async (req, res) => {
  res.status(200).json('TODO')
};

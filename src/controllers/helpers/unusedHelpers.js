exports.findRowByColumn = (sheet, columnNum, identifier) => {
  for(let i=0; i<sheet.length; i++){
    if(sheet[i][columnNum] === identifier){
      return sheet[i];
    };
  };
  console.log(`${identifier} not found in column ${columnNum} of provided array`);
};

exports.findCellByColumn = (sheet, columnNum, identifier, cellNum) => {
  for(let i=0; i<sheet.length; i++){
    if(sheet[i][columnNum] === identifier){
      if(sheet[i][cellNum]){
        return sheet[i][cellNum]
      };
      return {err: `you entered cell ${cellNum}, however there are only ${sheet[i].length} elements in selected array.`}
    };
  };
  return {err: `${identifier} not found in column ${columnNum} of provided array`}
};

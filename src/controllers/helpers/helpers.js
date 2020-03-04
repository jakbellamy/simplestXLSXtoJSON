const findRowByColumn = (sheet, columnNum, identifier) => {
  for(let i=0; i<sheet.length; i++){
    if(sheet[i][columnNum] === identifier){
      return sheet[i];
    };
  };
  console.log(`${identifier} not found in column ${columnNum} of provided array`);
};

const findCellByColumn = (sheet, columnNum, identifier, cellNum) => {
  for(let i=0; i<sheet.length; i++){
    if(sheet[i][columnNum] === identifier){
      if(sheet[i][cellNum]){
        return sheet[i][cellNum]
      };
      console.log(`you entered cell ${cellNum}, however there are only ${sheet[i].length} elements in selected array.`)
    };
  };
  console.log(`${identifier} not found in column ${columnNum} of provided array`)
};



//for use when the object-base is defined by the column
const columnObjectParser = (sheet, rowIn = 0, colIn = 1, rowOut, colOut) => {
  let parentKeys = sheet[rowIn];
  let product = [];
  if(parentKeys){
    parentKeys = parentKeys.slice(colIn, sheet.length);
    for(let i = rowIn; i<parentKeys.length; i++){
      let parentObject = {};
      let childKeys = []
      //fill children
      for(let j = rowIn + 1; i<sheet.length; i++){
        console.log('do something')
      };
      //fill parent with children
      parentObject[`${parentKeys[i]}`] = sheet[rowIn + 1];
      product.push(parentObject);
    };
  };
  return parentKeys;
};

//for use when the object-base is defined by the row
const rowObjectParser = () => {
  console.log('do something');
};

//exports
module.exports = {
  findRowByColumn,
  findCellByColumn,
  columnObjectParser,
  rowObjectParser
};

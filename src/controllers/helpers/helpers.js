exports.columnObjectParser = (sheet, targetRow = 0, targetColumn = 0, rowFloor = 1, rowCeiling = 2500) => {
  let jsonObject = {}
  let parentKeys = sheet[targetRow];
  if(parentKeys){
    for(i = targetColumn; i < parentKeys.length; i++){
      jsonObject[`${parentKeys[i]}`] = {};
      for(j = rowFloor; j<sheet[i].length && j<rowCeiling; j++){
        jsonObject[`${parentKeys[i]}`][`${sheet[j][targetColumn]}`] = sheet[i][j];
      };
    };
  };
  return jsonObject;
};

exports.rowObjectParser = () => {
  console.log('do something');
};

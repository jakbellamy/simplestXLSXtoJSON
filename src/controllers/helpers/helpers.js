exports.columnObjectParser = (sheet, targetRow = 0, targetColumn = 0, rowFloor = 1, rowCeiling = 2500) => {
  let jsonObject = {};
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

exports.rowObjectParser = (sheet, targetColumn = 0, targetRow = 0, columnFloor = 1, columnCeling = 50, rowUntilBreak = false, rowCeiling = 2500) => {
  let jsonObject = {};
  //fill parentKeys
  let parentKeys = [];
  if(rowUntilBreak = true){
    for(i = targetRow + 1; i<sheet.length && sheet[i]; i++){
      jsonObject[`${sheet[i][0]}`] = {};
      for(j = columnFloor; j<sheet[i].length && j<columnCeling; j++){
        jsonObject[`${sheet[i][0]}`][`${sheet[targetRow][j]}`] = sheet[i][j];
      };
      parentKeys.push(jsonObject);
    };
  };
  return parentKeys;
};

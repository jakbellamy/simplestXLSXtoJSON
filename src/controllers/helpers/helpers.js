exports.columnObjectParser = (sheet, rowIn = 0, colIn = 1, rowOut, colOut) => {
  let jsonObject = {}
  let parentKeys = sheet[rowIn];
  if(parentKeys){
    for(i=colIn; i < parentKeys.length; i++){
      jsonObject[`${parentKeys[i]}`] = {};
      for(j=1; j<sheet[i].length; j++){
        jsonObject[`${parentKeys[i]}`][`${sheet[j][0]}`] = sheet[i][j];
      };
    };
  };
  return jsonObject;
};

exports.rowObjectParser = () => {
  console.log('do something');
};

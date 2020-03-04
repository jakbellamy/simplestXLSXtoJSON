import React, { useState } from 'react';
import MyDropzone from './dropzone';

export default function DropContainer() {
  // file from dropzone
  const [importedFiles, setImportedFiles] = useState(null);
  const [fileIsPresent, setFileIsPresent] = useState(false);
  const [parseMethod, setParseMethod] = useState('parseCol');
  const [parseParams, setParseParams] = useState({});

  const methodSwitch = (params) => {
    switch(params){
      case 'parseCol':
        return 'parse_columns';
      case 'parseRow':
        return 'parse_rows';
    };
  };

  return(
    <div>
      <h1>SPREADSHEET TO JSON</h1>
      {fileIsPresent ? <h3>file is present</h3> : <h3>no file present</h3>}
      <MyDropzone
        importedFiles={importedFiles}
        setImportedFiles={setImportedFiles}
        setFileIsPresent={setFileIsPresent}
        parseMethod={parseMethod}
        setParseMethod={setParseMethod}
        setParseParams={setParseParams}
        methodSwitch={methodSwitch}
      />
    </div>
  );
};

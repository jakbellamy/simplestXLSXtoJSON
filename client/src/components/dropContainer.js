import React, { useState } from 'react';
import MyDropzone from './dropzone';
const Styles = require('./styles/dropContainerStyles');

export default function DropContainer() {
  // file from dropzone
  const [importedFiles, setImportedFiles] = useState(null);
  const [fileIsPresent, setFileIsPresent] = useState(false);

  if(fileIsPresent){
    console.log(importedFiles);
    fetch( `http://localhost:5000/xls_reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //convert file to BASE64
        xls: window.btoa(importedFiles)
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
  };

  return(
    <div>
      <h1>SPREADSHEET TO JSON</h1>
      {fileIsPresent ? <h3>file is present</h3> : <h3>no file present</h3>}
      <MyDropzone
        importedFiles={importedFiles}
        setImportedFiles={setImportedFiles}
        setFileIsPresent={setFileIsPresent}
      />
    </div>
  );
};

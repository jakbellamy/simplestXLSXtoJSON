import React, {useMemo, useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
const Styles = require('./styles/dropzoneStyles');

export default function MyDropzone(props) {

  const onDrop = useCallback(acceptedFiles => {

    props.setFileIsPresent(true);
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
        fetch( `http://localhost:9000/parse_rows`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            //convert file to BASE64
            xls: event.target.result
          })
        })
        .then(res => res.json())
        .then(res => console.log(res))
      };
    reader.readAsDataURL(file);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({onDrop});

  const style = useMemo(() => ({
    ...Styles.baseStyle,
    ...(isDragActive ? Styles.activeStyle : {}),
    ...(isDragAccept ? Styles.acceptStyle : {}),
    ...(isDragReject ? Styles.rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  return (
    <div>
      <select onChange={(e) => props.setParseMethod(e.target.value)}>
        <option value="parseCol">Parse Column Objects</option>
        <option value="parseRow">Parse Row Objects</option>
      </select>

      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
    </div>
  )
};

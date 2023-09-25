'use client'
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <h2>CKEditor Example</h2>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
        config={{
          ckfinder: {
          // Configure CKFinder for image uploads
          uploadUrl: 'http://localhost:3000/api/fileUpload', // Replace with your server's endpoint
        },
        }}
      />
      <button onClick={() => console.log(editorData)}>Log Editor Content</button>
    </div>
  );
};

export default Editor;

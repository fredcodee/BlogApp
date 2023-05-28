import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'link', 'image',
    'align',
  ];

  return (
    <div className='container mb-4'>
      <div>
        <input type="text" placeholder='Title of The Blog' />
        <hr />
        <div> 
          <label htmlFor="">Blog Image</label>
          <input type="file" />
        </div>
        <div>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </div>
        <div className='text-center pt-3'>
          <button className='btn btn-primary'>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default Write;

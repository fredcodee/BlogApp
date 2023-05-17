import React, {useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
  return (
    <div className='container mb-4'>
      <div>
        <input type="text" placeholder='Title' />
        <div>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  )
}

export default Write

import React, { useState, useRef, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Write = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('');
  const quillRef = useRef(null); 

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.getModule('toolbar').addHandler('image', () => quillImageCallBack());
    }
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'link': 'link' }],
        [{ 'image': 'image' }],
        [{ 'align': [] }],
        ['clean'],
        ['code-block']
      ]
    }
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'link',
    'image',
    'align',
    'code-block'
  ];
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const quillImageCallBack = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await axios.post('/api/admin/upload-images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
        const range = quillRef.current.getEditor().getSelection();
        const index = range ? range.index : 0;
        quillRef.current.getEditor().insertEmbed(index, 'image', response.data);
      } catch (error) {
        console.log('Error uploading file:', error);
      }
    };
  };
  

  const saveToDatabase = async () => {
    try {
      // Validate if a file is selected and check if it's an image
      if (selectedFile) {
        const isImage = selectedFile.type.startsWith('image/');
        if (!isImage) {
          setErrors('Invalid file format. Please select an image file.');
          return;
        }
      }

      // Validate if a title is entered
      if (!title) {
        setErrors('Please enter a title for your blog.');
        return;
      }

      // send content to sever if success then send image  to server
      const blogData = {
        title: title,
        description: value,
      }
      const token = localStorage.getItem('authTokens').replace(/"/g, '');
      const response = await axios.post('/api/admin/add-blog', blogData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        // send image to server if a file is selected
        if (selectedFile) {
          const formData = new FormData();
          formData.append('image', selectedFile);
          formData.append('id', response.data._id);
          try {
              const imageResponse = await axios.post('/api/admin/upload', formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                  },
              });
              setSuccess('Blog and Image updated successfully.');
          } catch (error) {
              setErrors('Error uploading image.');
          }
      } else {
          setSuccess('Blog updated successfully.');
      }
      }).catch((error) => {
        setErrors('Error saving blog.');
      });
    } catch (error) {
      setErrors('Error uploading file.');
    }
  };

  
  return (
    <div className='container mb-8'>
      <div>
        <input type="text" placeholder='Title of The Blog'  onChange={handleTitleChange}/>
        <hr />
        <div> 
          <label htmlFor="">Blog Image</label>
          <input type="file"  onChange={handleFileChange} style={{margin:"0"}}/>
        </div>
        <div>
          <label htmlFor="">Write</label>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={value}
            onChange={handleChange}
            modules={modules}
            formats={formats}
          />
        </div>
        <div className='text-center pt-3'>
          <button className='btn btn-primary'  onClick={saveToDatabase} >Publish</button>
        </div>
        <div className='text-center pt-4'>
          {errors && <p className='text-danger'>{errors} ☹️</p>}
          {success && <p className='text-success'>{success} 😀</p>}
        </div>
      </div>
    </div>
  );
};

export default Write;

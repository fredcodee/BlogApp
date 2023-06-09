import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const EditBlog = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'link': 'link' }],
            [{ 'align': [] }],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'link',
        'align',
    ];

    useEffect(() => {
        fetchBlogData();
    }, []);

    const fetchBlogData = async () => {
        try {
            const response = await axios.get(`/api/single-blog/${id}`);
            const blogData = response.data;
            setTitle(blogData.title);
            setValue(blogData.description);
        } catch (error) {
            setErrors('Error fetching blog data.');
        }
    };

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

            // send content to server if success then send image to server
            const blogData = {
                id: id,
                title: title,
                description: value,
            };
            const token = localStorage.getItem('authTokens').replace(/"/g, '');
            const response = await axios.post(`/api/admin/edit-blog`, blogData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(async (response) => {
                // send image to server if a file is selected
                if (selectedFile) {
                    const formData = new FormData();
                    formData.append('image', selectedFile);
                    formData.append('id', id);
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
                <h2>Edit Blog post</h2>
            </div>
            <div>
                <input type="text" placeholder='Title of The Blog' value={title} onChange={handleTitleChange} />
                <hr />
                <div>
                    <label htmlFor="">Blog Image</label>
                    <input type="file" onChange={handleFileChange} style={{ margin: "0" }} />
                </div>
                <div>
                    <label htmlFor="">Write</label>
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={handleChange}
                        modules={modules}
                        formats={formats}
                    />
                </div>
                <div className='text-center pt-3'>
                    <button className='btn btn-primary' onClick={saveToDatabase}>Update</button>
                </div>
                <div className='text-center pt-4'>
                    {errors && <p className='text-danger'>{errors} ☹️</p>}
                    {success && <p className='text-success'>{success} 😀</p>}
                </div>
            </div>
        </div>
    );
};

export default EditBlog;

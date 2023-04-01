const blog = require('../models/blogModel')


const getBlogs = async(req, res) => {
    try {
        const blogs = await blog.find({}).sort({date: -1})
        const page =req.query.page || 1;
        const paginatedBlogs = paginate(blogs, 9)
        const  totalpages = paginatedBlogs.length
        res.send({blogs: paginatedBlogs[page - 1], totalpages})
    } catch (error) {
        errorHandler(error, res)
    }

}


// get 3 random blogs with pin set to true
const getRandomPinnedBlogs = async(req,res) => { 
    try {
        const pinnedBlogs = await blog.find({ pin: true }); // find all pinned blogs
        const randomPinnedBlogs = pinnedBlogs.sort(() => 0.5 - Math.random()); // shuffle the array of pinned blogs
        res.send(randomPinnedBlogs.slice(0, 3)); // get the first 3 blogs
      } catch (error) {
        errorHandler(error, res)
      }
}


// create a function to view a single blog
const getSingleBlog = async(req, res) => {
    const {id} = req.params;
    try {
        const singleBlog = await blog.findById(id)
        res.send(singleBlog)
    } catch (error) {
        errorHandler(error, res)
    }
}


// paginate  function
function paginate(data, itemsPerPage) {
    const pages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = [];
  
    for (let i = 0; i < pages; i++) {
      const start = i * itemsPerPage;
      const end = start + itemsPerPage;
      paginatedData.push(data.slice(start, end));
    }
  
    return paginatedData;
  }

// error handler
function errorHandler(error, res) {
    return res.status(500).json({
        title: 'server error',
        message : error.message,
        stack : process.env.NODE_ENV === 'Production' ? null : error.stack,
    })
}


module.exports = { getBlogs, getRandomPinnedBlogs, getSingleBlog }
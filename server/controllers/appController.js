const blog = require('../models/blogModel')
const nodemailer = require('nodemailer')


const getBlogs = async (req, res) => {
    try {
      const blogs = await blog.find({}).sort({ date: -1 });
      const page = req.body.page || 1;
      const pageSize = 9;
      const totalBlogs = blogs.length;
      const totalPages = Math.ceil(totalBlogs / pageSize);
  
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
      const paginatedBlogs = blogs.slice(startIndex, endIndex);
  
      res.json({ blogs: paginatedBlogs, totalPages });
    } catch (error) {
      errorHandler(error, res);
    }
  };
  


// get 3 random blogs with pin set to true
const getRandomPinnedBlogs = async(req,res) => { 
    try {
        const pinnedBlogs = await blog.find({ pin: true }); // find all pinned blogs
        const randomPinnedBlogs = pinnedBlogs.sort(() => 0.5 - Math.random()); // shuffle the array of pinned blogs
        res.json(randomPinnedBlogs.slice(0, 3)); // get the first 3 blogs
      } catch (error) {
        errorHandler(error, res)
      }
}


// create a function to view a single blog
const getSingleBlog = async(req, res) => {
    const {title} = req.params;
    try {
        const singleBlog = await blog.findOne({title: title})
        res.json(singleBlog)
    } catch (error) {
        errorHandler(error, res)
    }
}

// contact form send email
const sendEmail = async(req, res) => {
    const {name, email, message} = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD
            }
        })

        const mailOptions = {
            from: email,
            to: process.env.MAIL_RECIPIENT,
            subject: `Message from ${name} through fredcode.com`,
            text: message
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                res.status(500).json(error)
            } else {
                console.log('Email sent: ' + info.response)
                res.json('email sent successfully')
            }
        })
    } catch (error) {
        errorHandler(error, res)
    }
}


// error handler
function errorHandler(error, res) {
    return res.status(500).json({
        title: 'server error',
        message : error.message,
        stack : process.env.NODE_ENV === 'Production' ? null : error.stack,
    })
}


module.exports = { getBlogs, getRandomPinnedBlogs, getSingleBlog, sendEmail }
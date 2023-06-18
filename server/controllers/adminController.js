const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require('../models/userModel')
const blog = require('../models/blogModel')
const image = require('../models/image')


const health = async (req, res) => {
    return res.json({ 'status': 'ok' })
}


const checkPasscode = async (req, res) => {
    const { passcode } = req.body;
    try {
        if (passcode === process.env.PASSCODE) {
            return res.status(200).json({ message: 'Passcode is correct' })
        } else {
            return res.status(400).json({ message: 'Passcode is incorrect' })
        }
    } catch (error) {
        errorHandler(error, res)
    }
}

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        //check if user exists
        const userExists = await user.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' })
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        //create user
        const newUser = new user({
            email,
            password: hashedPassword
        })
        //save user
        const savedUser = await newUser.save()
        //create token
        const token = createToken(savedUser._id)
        //send token
        return res.status(201).json({ token })
    } catch (error) {
        errorHandler(error, res)
    }
}

//create login user function
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        //check if user exists
        const userdetail = await user.findOne({ email })
        if (!userdetail) {
            return res.status(400).json({ message: 'User does not exist' })
        }
        //check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, userdetail.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        //create token
        const token = createToken(userdetail._id)
        //send token
        return res.status(200).json({ token })
    } catch (error) {
        errorHandler(error, res)
    }
}


const getMe = async (req, res) => {
    try {
        return res.json(req.user.email)
    } catch (error) {
        errorHandler(error, res)
    }
}


// view all blogposts
const getBlogs = async (req, res) => {
    try {
        //sort blogs by date created from newest to oldest
        const blogposts = await blog.find().sort({ date: -1 })
        return res.json(blogposts)
    } catch (error) {
        errorHandler(error, res)
    }
}

//filter blogpost by title
const filterBlogs = async (req, res) => {
    const { title } = req.body;
    try {
        const blogposts = await blog.find({ title: { $regex: title, $options: 'i' } });
        return res.json(blogposts);
    } catch (error) {
        errorHandler(error, res);
    }
};



//add blogpost
const addBlog = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newBlog = new blog({ title, description })
        const savedBlog = await newBlog.save()
        return res.json(savedBlog)
    } catch (error) {
        errorHandler(error, res)
    }
}

//add blogimage
const addBlogImage = async (req, res) => {
    try {
        const file = req.file;
        const id = req.body.id;
        //error handling if file is not jpg or jpeg
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return res.status(400).send('Please upload a image file')
        }

        const blogpost = await blog.findById(id)
        if (blogpost) {
            blogpost.image = file.filename
            const savedBlog = await blogpost.save()
            return res.json(savedBlog)
        } else {
            res.status(404).send('Blog not found')
        }

    } catch (error) {
        errorHandler(error, res)
    }

}

//add content images
const addContentImage = async (req, res) => {
    try {
        const file = req.file;
        //error handling if file is not jpg, jpeg or png
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return res.status(400).send('Please upload a image file')
        }

        const newImage = new image({ name: file.filename })
        const savedImage = await newImage.save()
        return res.json(`/uploads/${savedImage.name}`)
    }
    catch (error) {
        errorHandler(error, res)
    }
}



//delete blogpost
const deleteBlog = async (req, res) => {
    const { id } = req.body;
    try {
        const deletedBlog = await blog.findByIdAndDelete(id)
        return res.json({ message: 'Blog deleted successfully' })
    } catch (error) {
        errorHandler(error, res)
    }
}


//update blogpost
const updateBlog = async (req, res) => {
    const { id, title, description } = req.body;
    try {
        //find blog by id
        const document = await blog.findById(id)
        await blog.updateOne({ _id: document._id }, {
            $set: {
                title: title,
                description: description,
            }
        });
        return res.json({ message: 'Blog updated successfully' })

    } catch (error) {
        errorHandler(error, res)
    }
}

// pin blogpost
const pinBlog = async (req, res) => {
    // if blog.pin is true set it to false and vice versa
    const { id } = req.body;
    try {
        const document = await blog.findById(id)
        await blog.updateOne({ _id: document._id }, {
            $set: {
                pin: !document.pin
            }
        });
        return res.json({ message: 'Blog pin updated successfully' })
    } catch (error) {
        errorHandler(error, res)
    }
}


//create a function to  handle token generation
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}


//get all user
const getUsers = async (req, res) => {
    try {
        const users = await user.find()
        return res.json(users)
    } catch (error) {
        errorHandler(error, res)
    }
}

//delete user
const deleteUser = async (req, res) => {
    const { id } = req.body;
    try {
        if (req.user._id == id) {
            return res.status(400).json({ message: 'You cannot delete yourself' })
        }
        if (req.user.email !== 'fredcode23@gmail.com' || req.user.email !== 'wilfredchukwu1@gmail.com') {
            return res.status(400).json({ message: 'You are not authorized to delete user' })
        }
        const deletedUser = await user.findByIdAndDelete(id)
        return res.json({ message: 'User deleted successfully' })
    } catch (error) {
        errorHandler(error, res)
    }
}



// error handler
function errorHandler(error, res) {
    return res.status(500).json({
        title: 'server error',
        message: error.message,
        stack: process.env.NODE_ENV === 'Production' ? null : error.stack,
    })
}





module.exports = {
    health, registerUser, loginUser, getMe, getBlogs, addBlog, filterBlogs, deleteBlog, updateBlog, pinBlog, checkPasscode, addBlogImage, getUsers, deleteUser, addContentImage
}
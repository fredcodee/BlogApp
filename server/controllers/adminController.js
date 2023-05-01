const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user  = require('../models/userModel')
const blog = require('../models/blogModel')


const health = async(req, res) => {
    return res.json({ 'status': 'ok' })
}


const checkPasscode = async(req, res) => {
    const {passcode} = req.body;
    try {
        if(passcode === process.env.PASSCODE){
            return res.status(200).json({message: 'Passcode is correct'})
        }else{
            return res.status(400).json({message: 'Passcode is incorrect'})
        }
    } catch (error) {
        errorHandler(error, res)
    }
}

const registerUser = async(req, res)=>{
    const {email, password} = req.body;
    try {
        //check if user exists
        const userExists = await user.findOne({email})
        if(userExists){
            return res.status(400).json({message: 'User already exists'})
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
        return res.status(201).json({token})
    } catch (error) {
        errorHandler(error, res)
    }
}

//create login user function
const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try {
        //check if user exists
        const userdetail = await user.findOne({email})
        if(!userdetail){
            return res.status(400).json({message: 'User does not exist'})
        }
        //check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, userdetail.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message: 'Invalid credentials'})
        }
        //create token
        const token = createToken(userdetail._id)
        //send token
        return res.status(201).json({token})
    } catch (error) {
        errorHandler(error, res)
    }
}


const getMe = async (req, res) => {
    try {
        res.send(req.user.email)
    } catch (error) {
        errorHandler(error, res)
    }
}


// view all blogposts
const getBlogs = async(req, res) => {
    try {
        //sort blogs by date created from newest to oldest
        const blogposts = await blog.find().sort({date: -1})
        res.send(blogposts)
    } catch (error) {
        errorHandler(error, res)
    }
}

//filter blogposts by dates in reg body
const filterBlogs = async(req, res) => {
    const {startDate, endDate} = req.body;
    try {
        const blogposts = await blog.find({date: {$gte: startDate, $lte: endDate}})
        res.send(blogposts)
    } catch (error) {
        errorHandler(error, res)
    }
}

//add blogpost
const addBlog = async(req, res) => {
    const {title, description, image} = req.body;
    try {
        const newBlog = new blog({ title, description, image}) 
        const savedBlog = await newBlog.save()
        res.send(savedBlog)
    } catch (error) {
        errorHandler(error, res)
    }
}


//delete blogpost
const deleteBlog = async(req, res) => {
    const {id} = req.body;
    try {
        const deletedBlog = await blog.findByIdAndDelete(id)
        res.send.json({message: 'Blog deleted successfully'})
    } catch (error) {
        errorHandler(error, res)
    }
}


//update blogpost
const updateBlog = async(req, res) => {
    const { title, description, image} = req.body;
    try {
        //find blog by id
        const document = await blog.find({title: title})
        await blog.updateOne({ _id: document._id }, {
            $set: {
                title: title,
                description: description,
                image: image
            }
        });
        res.send.json({message: 'Blog updated successfully'})

    } catch (error) {
        errorHandler(error, res)
    }
}

// pin blogpost
const pinBlog = async(req, res) => {
    const {id} = req.body;
    try {
        await blog.updateOne({ _id: id }, {
            $set: {
                pin: true
            }
        });
        res.send.json({message: 'Blog pinned successfully'})

    } catch (error) {
        errorHandler(error, res)
    }
}










//create a function to  handle token generation
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

// error handler
function errorHandler(error, res) {
    return res.status(500).json({
        title: 'server error',
        message : error.message,
        stack : process.env.NODE_ENV === 'Production' ? null : error.stack,
    })
}



module.exports = {
    health, registerUser, loginUser, getMe, getBlogs, addBlog, filterBlogs, deleteBlog,  updateBlog, pinBlog, checkPasscode
}
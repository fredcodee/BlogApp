const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user  = require('../models/userModel')


const health = async(req, res) => {
    return res.json({ 'status': 'ok' })
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
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userdetails = await user.findOne({ _id: decoded.id})

        if (!token) {
            res.status(401)
            throw new Error('Not authorized, no token')
          }

        res.send(userdetails)
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
    health, registerUser, loginUser, getMe
}
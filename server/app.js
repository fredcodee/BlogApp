require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const multer = require('multer');
const  appRoutes = require("./routes/appRoutes")
const adminRoutes = require("./routes/admin")



const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', appRoutes);
app.use('/api/admin', adminRoutes);

//set up multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../client/public/uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})


app.post('/api/upload', upload.single('image'), (req, res)=>{
    const  file = req.file;
    //error handling if file is not jpg or jpeg
    if(!file.originalname.match(/\.(jpg|jpeg)$/)){
        return res.status(400).send('Please upload a image file')
    }
    console.log(req.body.title) // for knowing which image is for which blog
    res.send(file.filename)
}
)


mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(()=>{
    app.listen(process.env.PORT);
    console.log(`listening to ${process.env.PORT}`)
})
.catch(err => console.log(err))
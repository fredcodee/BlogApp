require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const allowedOrigins = require('./configs/allowedOrigins');
const  appRoutes = require("./routes/appRoutes")
const adminRoutes = require("./routes/admin")



const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors({  origin: allowedOrigins, credentials: true }));
app.use('/api', appRoutes);
app.use('/api/admin', adminRoutes);





mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(()=>{
    app.listen(process.env.PORT);
    console.log(`listening to ${process.env.PORT}`)
})
.catch(err => console.log(err))
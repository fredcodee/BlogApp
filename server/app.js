require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const  appRoutes = require("./routes/appRoutes")
const adminRoutes = require("./routes/admin")



const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', appRoutes);
app.use('/api/admin', adminRoutes);





mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(()=>{
    app.listen(process.env.PORT);
    console.log(`listening to ${process.env.PORT}`)
})
.catch(err => console.log(err))
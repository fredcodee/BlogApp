const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    img: String,
    date: { type: Date, default: Date.now },
    pin : Boolean
});

module.exports = mongoose.model('Blog', blogSchema);
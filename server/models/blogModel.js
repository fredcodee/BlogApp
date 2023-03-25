const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    date: { type: Date, default: Date.now },
    pin : { type: Boolean, default: false}
});

module.exports = mongoose.model('Blog', blogSchema);
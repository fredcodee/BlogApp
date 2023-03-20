const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    editor:{
        type: mongo.Schema.Types.ObjectId,
        required: true,
        ref:'User',
    },
    title: String,
    post: String,
    date: { type: Date, default: Date.now },
    pin : Boolean
});

module.exports = mongoose.model('Blog', blogSchema);
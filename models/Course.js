// backend/models/Course.js

const { default: mongoose } = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    instructor: String
});

module.exports = mongoose.model('Course', courseSchema)
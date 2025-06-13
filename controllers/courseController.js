const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
}

exports.createCourses = async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course)
}
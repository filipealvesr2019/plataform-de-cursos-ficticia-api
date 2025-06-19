const express = require('express');
const router = express.Router();
const { getCoures, createCourses } = require('../controllers/courseController');

router.get('/', getCoures);
router.post('/', createCourses);

module.exports = router;
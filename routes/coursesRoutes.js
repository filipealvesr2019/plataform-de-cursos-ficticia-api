const express = require('express');
const router = express.Router();
const { getCoures, createCourses } = express.Router();

router.get('/', getCoures);
router.post('/', createCourses);

module.exports = router;
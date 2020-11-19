const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');



router.get('/top-headings/category=:category', controller.getTopHeadingsByCategory);
router.get('/top-headings', controller.getTopHeadings);


module.exports = router;
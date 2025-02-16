const express = require('express');
const router = express.Router();
const { dashboard } = require('../app/controllers/AdminController');
const dynamicResoucre = require('../config/utils/dynamicResource');
const verifyAdmin = require('../app/middleware/isAdmin');
const categoryController = require("../app/controllers/categoryController");

// console.log(middlewareFunction());
// router.use(middlewareFunction);
router.use(verifyAdmin);

router.get('/', dashboard);
dynamicResoucre(router, 'category');



module.exports = router
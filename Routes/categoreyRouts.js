const express = require('express');
const { getCategories, createCategory} =require('../Controllers/CategoryController');
const router=express.Router();
router.route('/').get(getCategories).post(createCategory); 



module.exports=router;
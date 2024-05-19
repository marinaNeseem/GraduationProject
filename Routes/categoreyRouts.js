const express = require('express');
const { createCategory,getItemsByCategoryId} =require('../Controllers/CategoryController');
const router=express.Router();
router.route('/').post(createCategory); 
router.route('/:categoryId').get(getItemsByCategoryId);

module.exports=router;
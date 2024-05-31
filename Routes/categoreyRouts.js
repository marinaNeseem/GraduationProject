const express = require('express');
const { getItemsByCategoryId} =require('../Controllers/CategoryController');
const router=express.Router();
router.route('/:categoryId').get(getItemsByCategoryId);

module.exports=router;
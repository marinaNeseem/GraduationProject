const express = require('express');
const { createCategory} =require('../Controllers/CategoryController');
const router=express.Router();
router.route('/').post(createCategory); 



module.exports=router;
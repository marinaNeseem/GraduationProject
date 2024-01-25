const express = require('express');
const {createItem} =require('../Controllers/ItemController');
const router=express.Router();
router.route('/').post(createItem); 



module.exports=router;
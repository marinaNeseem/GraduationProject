const express = require('express');
const {createItem,getItems,getItem,getItemByName,updateitem,deleteitem,listSavedItems,addToSavedItems} =require('../Controllers/ItemController');
const router=express.Router();
router.route('/').get(getItems).post(createItem); 
router.route('/addtosaveditems/:itemId').post(addToSavedItems);
router.route("/listSavedItems").get(listSavedItems);
router.route("/id/:id").put(updateitem).get(getItem).delete(deleteitem);
router.route("/title/:title").get(getItemByName);


module.exports=router;
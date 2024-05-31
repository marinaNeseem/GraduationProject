const express = require('express');
const {createItem ,getItems,getItem,getItemByName,updateitem,deleteitem,listSavedItems,addToSavedItems,search 
    ,RecentItems,GetUserAcceptedItems
} =require('../Controllers/ItemController');
const router=express.Router();
router.route('/').get(getItems).post(createItem);
router.route('/addtosaveditems/:itemId').post(addToSavedItems);
router.route('/userItemsid/:userId').get(GetUserAcceptedItems);
router.route("/listSavedItems").get(listSavedItems);
router.route("/RecentPosted").get(RecentItems);
router.route("/id/:id").put(updateitem).get(getItem).delete(deleteitem);
router.route("/title/:title").get(getItemByName);
router.route('/search').get(search);



module.exports=router;

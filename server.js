const express = require('express');
const dotenv =require('dotenv');//for config fil al 7agat aly btt8yer mn eviroment lltanya
const morgan = require('morgan');//for middleware 34an nn2l al data between req,res

dotenv.config({path:'config.env'});
const dbConnection =require('./config/database');
const categoryRoute=require('./Routes/categoreyRouts');
const itemRoute= require('./Routes/itemRoute');


//creating models in mongo db befor al routes 
const Cart = require('./modules/CartModel');
const User = require('./modules/UserModel');
const Favorite = require('./modules/FavouritesModel');
const Payment = require('./modules/PaymentModel');
const Transaction = require('./modules/TransactionModel');
const Chats = require('./modules/ChatsModel');






//call back function to connect database
dbConnection();

//Express app
const app = express();





// Middleware ***al hgat aly al mfrod t7sal between al res,req like parsing to jason

 app.use(express.json());//to convert string sended from postman to js.object

if(process.env.Node_ENV=='development'){
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.Node_ENV}`);
}








//Routes

app.use('/categories',categoryRoute);
app.use('/item',itemRoute);


const PORT=process.env.PORT||8000;//hy4of al port fe al env file ml2ho4 hya5od al odam al OR
  app.listen(PORT,()=>{
    console.log(`app is runing on port ${PORT}`);
  });
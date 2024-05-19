const express = require('express');
const dotenv =require('dotenv');//for config fil al 7agat aly btt8yer mn eviroment lltanya
const morgan = require('morgan');//for middleware 34an nn2l al data between req,res
//for chattt   
const http=require("http");
const cors =require("cors");

//Express app
const app = express();



var server=http.createServer(app);

var io =require ("socket.io")(server,{
  cors:
  {
    origin:"*"
  }
});


dotenv.config({path:'config.env'});
const dbConnection =require('./config/database');
const categoryRoute=require('./Routes/categoreyRouts');
const itemRoute= require('./Routes/itemRoute');
const UserRoute= require('./Routes/userRouts');
const ChatsRoute = require('./Routes/chatRoute');
const AdminRoute =require('./Routes/AdminRoute');

const RequestsRoute = require('./Routes/RequestsRoute'); 


//creating models in mongo db befor al routes 
const Cart = require('./modules/CartModel');
const User = require('./modules/UserModel');
const Favorite = require('./modules/FavouritesModel');
const Payment = require('./modules/PaymentModel');
const Transaction = require('./modules/TransactionModel');







//call back function to connect database
dbConnection();





// Middleware ***al hgat aly al mfrod t7sal between al res,req like parsing to jason

 app.use(express.json());//to convert string sended from postman to js.object
 app.use(cors());

 
// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chat messages
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);

    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


/*
 io.on("Connection",(socket)=>{
  console.log("connected");
 });*/

if(process.env.Node_ENV=='development'){
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.Node_ENV}`);
}








//Routes

app.use('/categories',categoryRoute);
app.use('/item',itemRoute);
app.use('/User',UserRoute);
app.use('/Request',RequestsRoute);
app.use('/chat',ChatsRoute);
app.use('/Admin',AdminRoute);

const PORT=process.env.PORT||8000;//hy4of al port fe al env file ml2ho4 hya5od al odam al OR
  server.listen(PORT,()=>{
    console.log(`app is runing on port ${PORT}`);
  });
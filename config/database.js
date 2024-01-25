const mongoose=require('mongoose');
const db_Connection = ()=>{
    //database connection

mongoose
.connect(process.env.Database_uri)
.then((conn)=>{

  console.log(`Database Connected: ${conn.connection.host}`);
})
.catch((err)=>{
  console.error(`Database Error:${err}`);
});
};
module.exports= db_Connection ;
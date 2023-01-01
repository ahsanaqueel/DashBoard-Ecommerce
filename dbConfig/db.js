const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const mongoose = require('mongoose');
const DB = process.env.DATABASE_URI;

const connectDB= async()=>{
  await   mongoose.connect(DB, (err, connection)=>{
    'mongodb://localhost:27017/EccomerceStoreDB'
   if(connection){
       console.log("Database Connected");
   }
   else{
       console.log(err);
   }
   })
}

module.exports = connectDB;
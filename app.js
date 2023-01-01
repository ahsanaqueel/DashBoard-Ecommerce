const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
let express = require('express');
const connectDB = require('./dbConfig/db');
const PORT = process.env.PORT || 5000;

let app =express();
app.use(express.json());
connectDB();

const UserRoute = require('./routes/User');
const ProductRoute = require('./routes/Product');
const StoreRoute = require('./routes/Store');
const OrderRoute = require('./routes/Order');

app.use('/user',UserRoute);
app.use('/product',ProductRoute);
app.use('/store',StoreRoute);
app.use('/order',OrderRoute);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})


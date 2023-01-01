let express = require('express');
let router = express.Router();
let Store = require('../models/storeDetails');
let Product = require('../models/product');
let User = require('../models/user');
let jsonwebtoken = require('jsonwebtoken');
var decoder = require('urldecode')
const { uploadStoreLogo } = require('../s3Service/s3Service');
const { S3 } = require("aws-sdk");
// router.get('/',async(req,res)=>{
//     res.send({data:'testing3'});
// })


const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_REGION
const accessKeyId = process.env.AWS_ACCESS_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const awsconfig=process.env.AWS_SDK_LOAD_CONFIG

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
    bucketName,
    awsconfig
});

router.post('/createstore',uploadStoreLogo.single('storeLogo'),async(req,res)=>{
   try {
        let id = req.params.id;
       let store = await new Store(req.body);
       store.storeLogo = await req.file.location;
       let data = await jsonwebtoken.verify(req.query.token, "FSD m cat says mioon")
        let Suser = await User.findById(data.id);
        store.user = Suser.id;
        await Store.findOneAndDelete({user:Suser.id});
        await store.save();
        res.json(store);    
   } catch (e) {
    console.error(e.message);
        res.status(500).json('Server Error');
   }   
});

router.get('/allstores',async(req,res)=>{
     try {     
         let stores = await Store.find();
         
         res.json(stores);
     } catch (e) {
         console.error(e.message);
         res.status(500).json('Server Error');
     }
 });

 router.put('/storeStatus/:_id',async(req,res)=>{
    try {
         // console.log(Object.values(req.body));
         let storeid = req.params._id;
         // // updateStoreStatus = await Store.findById(storeid);
         // updateStoreStatus = await Store.updateOne({_id:req.params._id},{$set: {storeStatus: req.body.storeStatus}});
         // if(updateStoreStatus){
         //      // updateStoreStatus.storeStatus=(req.body);
         //      console.log(updateStoreStatus.storeStatus);
         //      // await updateStoreStatus.save(updateStoreStatus);
         //      await res.json(updateStoreStatus);
         // let data =Object.values(req.body);
         // console.log(data);
         let updateStoreStatus = await Store.findByIdAndUpdate(storeid,{storeStatus:req.body.storeStatus});
         console.log(updateStoreStatus.storeStatus);
         // let statusChange = await Store.updateOne({storeStatus:updateStoreStatus.storeStatus},{$set:{storeStatus:data[0]}});
        //  let statusChange = await Store.updateOne({storeStatus:updateStoreStatus.storeStatus},{$set:req.body});
         res.json(updateStoreStatus);

         }
         
     catch (e) {
         console.error(e.message);
         res.status(500).json('Server Error');
    }
});


 router.get('/currentstore',async(req,res)=>{
     try {     
         let store= await Store.find({user:req.query.id});
         console.log(store)        
         res.json(store);
     } catch (e) {
         console.error(e.message);
         res.status(500).json('Server Error');
     }
 });


 router.delete('/storedelete/:_id',async(req,res)=>{
    try{
         let storeid = req.params._id;
        let store = await Store.findById(storeid);
         let productDelete = await Product.find();
       let deleteProduct =  productDelete.map((product)=>
                        {
                             if(product.store == storeid){
                             deleteItem=[];
                             deleteItem.push(product.productImage1);
                             deleteItem.push(product.productImage2);
                             deleteItem.push(product.productImage3);
                             deleteItem.push(store.storeLogo);
                             console.log(deleteItem)
                             console.log(product.productImage1);
                             deleteItem.forEach(async function(item){
                                  let fileKey = decoder(item)
                                  const datas = fileKey.split('amazonaws.com/')
                                  fileKey = datas.pop();
                                  console.log(fileKey);
                                  const params = {
                                    Bucket: bucketName,
                                    Key: fileKey,
                                  };
                                  await s3.deleteObject(params).promise();
                                  // res.json({imagesDeleted:deleteItem});
                              }
                              
                              )
                              product.deleteOne();
                              return product._doc;
                                  // console.log(product._doc);
                             }
                         });
                        //  console.log(deleteProduct);
        let StoreDelete = await Store.findByIdAndDelete(storeid);
           res.json({StoreDeleted:StoreDelete,DeletedProducts:deleteProduct});
                       
         }
         catch(e){
              console.error(e.message);
              res.status(500).json('Server Error');
         }
});
router.get('/totalstores',async(req,res)=>{
    try {
        
        let totalstores = await Store.find().countDocuments();
        console.log(totalstores);
        res.json(totalstores);
    } catch (error) {
        res.json(error.message);
    }

})
// router.get('/',async(req,res)=>{
//     const store = await Store.find().populate({
//         path:'user',
//         select:'name email role'

//     })
//     res.json({store:store});
// })
module.exports = router;
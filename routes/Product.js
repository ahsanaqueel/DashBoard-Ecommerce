let express = require('express');
require("dotenv").config();
let router = express.Router();
let Product = require('../models/product');
let Store = require('../models/storeDetails');
let User = require('../models/user');
let jsonwebtoken =require('jsonwebtoken');
const { uploadProductImages } = require('../s3Service/s3Service');
const { updateProductImages } = require('../s3Service/s3Service');
const { S3 } = require("aws-sdk");
var decoder = require('urldecode');

// router.get('/',async(req,res)=>{
//     res.send({data:'testing1'});
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

router.post('/addproduct',uploadProductImages.fields([
    {
    name :'productImage1', maxCount:1
    },
    {
    name:'productImage2',maxCount:1
    },
    {
    name: 'productImage3',maxCount:1
    }
]),async (req,res)=>{
    try {

        let id =req.query.id;
         console.log(id)
        const productImage1 = req.files.productImage1[0].location;
        const productImage2 = req.files.productImage2[0].location;
        const productImage3 = req.files.productImage3[0].location;
    //    console.log(productImage1);
        // console.log(file);
        let product = await new Product(req.body);
        product.productImage1 = productImage1;
        product.productImage2 = productImage2;
        product.productImage3 = productImage3;
        // let data = await jsonwebtoken.verify(req.query.token, "FSD m cat says mioon")
        // let Suser = await User.findById(data.id);
        // let storeData = await Store.find({_id:id});
        // console.log(storeData[0].id);
        // product.store=storeData[0]._id;
        product.store = id
        console.log(product.store);

         console.log(JSON.parse(product.productSizeWithStock))

         product.productSizeWithStock=JSON.parse(product.productSizeWithStock)
             
       await product.save(product);
       await res.json(product);
        
    } catch (e) {
        console.error(e.message); 
        res.status(500).json('Server Error');
    }

});


router.get('/allproducts',async(req,res)=>{
    try {     
        let products = await Product.find();        
        res.json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

router.get('/storeproducts',async(req,res)=>{
    try {     
        let products = await Product.find({store:req.query.id});
        res.json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});


router.put('/productFeaturedStatus',async(req,res)=>{
    try {
        console.log(req.body);
        let productid = req.query.id;
        console.log(productid);
        let updateProductStatus = await Product.findByIdAndUpdate(productid,{productFeatured:req.body.productFeatured});
        console.log(updateProductStatus )
        console.log(updateProductStatus.productFeatured);
        // let statusChange = await updateProductStatus.updateOne({productFeatured:updateProductStatus.productFeatured},{$set:req.body});
        // await res.json(statusChange);
        await res.json(updateProductStatus);
    } catch (e) {
           console.error(e.message);
           res.status(500).json('Server Error');
    }
 });

router.get('/singleProduct',async(req,res)=>{
    try {
        let productid = req.query.id
        console.log(productid);
        let singleProduct = await Product.findById(productid);
        res.json(singleProduct);
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

router.put('/updateProduct:_id',updateProductImages.fields([
    {
    name :'productImage1',maxCount:1
    },
    {
    name:'productImage2',maxCount:1
    },
    {
    name:'productImage3',maxCount:1
    }]),async(req,res)=>{
        
    try {
        deleteItem=[];
        let productid =req.params._id
        let ProductImage1,ProductImage2,ProductImage3;
        console.log(productid);
        let updateProduct = await Product.findById(productid);
        if(!updateProduct) res.status(404).json({msg:'no Product Found'});
        else{
        deleteItem.push(updateProduct.productImage1);
        deleteItem.push(updateProduct.productImage2);
        deleteItem.push(updateProduct.productImage3);
        }
        console.log(deleteItem);
        
        console.log(deleteItem[0]);
        console.log(req.files.productImage1);

        if(req.files.productImage1!=undefined){
            ProductImage1 = await req.files.productImage1[0].location;
            ProductImage2 = await req.files.productImage2[0].location;
            ProductImage3 = await req.files.productImage3[0].location;
            console.log(ProductImage1);
        }
    
        updateProduct = await Product.findByIdAndUpdate(productid,req.body);

        if(updateProduct){
            if(req.files.productImage1!=undefined){
        updateProduct.productImage1 = ProductImage1;
        updateProduct.productImage2 = ProductImage2;
        updateProduct.productImage3 = ProductImage3;
        console.log(updateProduct.productImage1);
                           
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
        })

            }
            else{
                updateProduct.productImage1=deleteItem[0];
                updateProduct.productImage2=deleteItem[1];
                updateProduct.productImage3=deleteItem[2];
                console.log(updateProduct.productImage3);
                console.log(deleteItem[0]);
            }
            console.log(updateProduct.productSizeWithStock)

            try{
                updateProduct.productSizeWithStock=JSON.parse(updateProduct.productSizeWithStock)
                // updateProduct.productSizeWithStock=JSON.parse(updateProduct.productSizeWithStock)
            }
             catch(e){
                updateProduct.productSizeWithStock=JSON.stringify(updateProduct.productSizeWithStock)
                updateProduct.productSizeWithStock=JSON.parse(updateProduct.productSizeWithStock)
                console.log(updateProduct.productSizeWithStock)
                 
                // updateProduct.productSizeWithStock=updateProduct.productSizeWithStock 
                 console.log(e)
             }
            
            console.log("okay")
            await updateProduct.save(updateProduct);
            await res.json(updateProduct);
            console.log( (updateProduct)
            )    
        }
        else{
            res.json('product update failed');
        }
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

router.delete('/:_id',async(req,res)=>{
    try {

        const deleteItem =[];
        let productid =req.params._id
     
        console.log(productid);
        let deleteProduct = await Product.findById(productid);
        // if(!deleteProduct)res.status(404).json({msg:'product not Found'});
        // else{
            deleteItem.push(deleteProduct.productImage1);
            deleteItem.push(deleteProduct.productImage2);
            deleteItem.push(deleteProduct.productImage3);
            console.log(deleteItem);
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
                
            })
            
        deleteProduct = await Product.findByIdAndDelete(productid);
        console.log(deleteProduct);
        await res.json({msg:"Product Removed",
                        imagesDeleted:deleteItem});

      
        // }
    } catch (error) {
        
    }
});
router.get('/totalproducts',async(req,res)=>{
    try {
        
        let totalproducts = await Product.find().countDocuments();
        console.log(totalproducts);
        res.json(totalproducts);
    } catch (error) {
        res.json(error.message);
    }

})
router.get('/SellerProducts',async(req,res)=>{
    try {     
        let products = await Product.find({store:req.query.id}).countDocuments();
        res.json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});
router.get('/sellerFeaturedProducts',async(req,res)=>{
    try {
        let sellerFeaturedProducts = await Product.find({$and:[{store:req.query.id},{productFeatured:"true"}]}).countDocuments();
        console.log(sellerFeaturedProducts);
        res.json(sellerFeaturedProducts);
    } catch (error) {
        res.json(error.message);
    }
})

router.get('/totalFeaturedProducts',async(req,res)=>{
    try {
        let totalFeaturedProducts = await Product.find({productFeatured:"true"}).countDocuments();
        console.log(totalFeaturedProducts);
        res.json(totalFeaturedProducts);
    } catch (error) {
        res.json(error.message);
    }
})



module.exports = router;
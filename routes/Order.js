let express = require('express');
let router = express.Router();
let Order = require('../models/order');
let Product = require('../models/product')

router.get('/sortorder',async(req,res)=>{
    try {        
        let orderFound=[];
        let storeid=req.query.id;
        console.log(storeid);
            let orders =await Order.find();
            console.log(orders)
            orders.map((order)=>{
                console.log(order._doc)
                console.log(order._doc.orderProducts)
                // console.log(order.orderProducts.storeId);
                let orderedProducts = order._doc.orderProducts;
                console.log(orderedProducts)
               let filterorder= orderedProducts.filter(orderedProduct=>orderedProduct.storeId==storeid);
               if(filterorder.length==1){
               filterorder.map((filter)=>{
                console.log(order.orderProducts=filter);
                    // orderFound.push(filter);
                })
                orderFound.push(order);
                }
                if(filterorder.length>1){
                    order.orderProducts=[];
                    filterorder.map((filter)=>{
                        order.orderProducts.push(filter);
                    })
                    orderFound.push(order);
                }
            
            
                // console.log(filterorder);
               
    
    })
    console.log(orderFound);
    res.json(orderFound);
    
    //         if(orderFound){
    //         res.json(order);
    //         console.log(order);
    // // }
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }

});
      
// router.put('/orderstatus:pid',async(req,res)=>{
//     try {
//         let orderid=req.query.id;
//         let productid=req.params.pid;
//         let productDetails;
//         let totalproducts=[];
//         let order = await Order.findById(orderid);
//         console.log(order)
//         order._doc.orderProducts.forEach(async(product,index) => {
//             if(product.productId==productid){
//                 console.log(product);
//                 console.log(index);
//             console.log(product.productStatus)
//             // let status=product.productStatus;
//             // await Order.updateOne({_id:orderid},{$set:{status:req.body.productStatus}})
//             // productStatus=req.body.productStatus;
//             console.log(order._doc.orderProducts[index]["productStatus"])
//             order._doc.orderProducts[index]["productStatus"]=req.body.productStatus
//             await order.update( order._doc.orderProducts[index]["productStatus"]=(req.body.productStatus));
//             // await order.save(product={...product, productStatus})
//             // await order.orderProducts.save(product)
//             // await product.save(product);
//             totalproducts.push(product);
//         }
//         console.log(product.productStatus);
//         if(product.productStatus=="Approve"){
//                 productDetails =await Product.findById(productid);
//                 console.log(productDetails);
//                 console.log(productDetails.productSizeWithStock["Small"]);
//                 console.log(productDetails.productSizeWithStock)
//                 console.log(product.productQuantity);

//                 if(product.size=='Small'){
//                     let Small=productDetails.productSizeWithStock["Small"] - product.productQuantity;
//                     productDetails.productSizeWithStock={...productDetails.productSizeWithStock, Small}
//                     productDetails.totalProductStock=productDetails.totalProductStock- product.productQuantity;
//                 }else if(product.size=='Medium'){
//                 // quantityChange = await Product.updateOne({_id:productDetails._id},{$set:{ "productSizeWithStock.Medium" : productSizeWithStock.Medium - product.productQuantity}})
//                 let Medium=productDetails.productSizeWithStock["Medium"] - product.productQuantity;
//                 productDetails.productSizeWithStock={...productDetails.productSizeWithStock, Medium}
//                 productDetails.totalProductStock=productDetails.totalProductStock- product.productQuantity;
//             }
//             else if(product.size=='Large'){
//                 // quantityChange = await Product.updateOne({_id:productDetails._id},{$set:{ "productSizeWithStock.Medium" : productSizeWithStock.Medium - product.productQuantity}})
//                 let Large=productDetails.productSizeWithStock["Large"] - product.productQuantity;
//                 productDetails.productSizeWithStock={...productDetails.productSizeWithStock, Large}
//                 productDetails.totalProductStock=productDetails.totalProductStock- product.productQuantity;
//             }
//             else if(product.size=='xLarge'){
//                 // quantityChange = await Product.updateOne({_id:productDetails._id},{$set:{ "productSizeWithStock.Medium" : productSizeWithStock.Medium - product.productQuantity}})
//                 let xLarge=productDetails.productSizeWithStock["xLarge"] - product.productQuantity;
//                 productDetails.productSizeWithStock={...productDetails.productSizeWithStock, xLarge}
//                 productDetails.totalProductStock=productDetails.totalProductStock- product.productQuantity;
//             }
//             await productDetails.save(productDetails);
//         }
//     });
    
//     await res.json({totalproducts,productDetails});
        
//     } 
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json('Server Error');
        
//     }
    
// })

router.get('/totalOrders',async(req,res)=>{
    try {
        let totalOrders = await Order.find().countDocuments();
        console.log(totalOrders);
        res.json(totalOrders);
    } catch (error) {
        res.json(error.message);
        
    } 
})
module.exports = router;
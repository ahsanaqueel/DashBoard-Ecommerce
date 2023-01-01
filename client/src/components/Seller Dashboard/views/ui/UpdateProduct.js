import { useState,useEffect, useRef } from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/scss/main.scss';
import CurrentStore from "../../layouts/CurrentStore";
import { Link ,useParams} from "react-router-dom";
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";


  
  const AddProduct = () => {

       let {productID}=useParams();
       let currentStore = CurrentStore()

       let image1=useRef()
       let image2=useRef()
       let image3=useRef()
       let formRef=useRef()

       let   [productTitle, setProductTitle] =useState("");
       let   [productPrice, setProductPrice] =useState("");
       let   [totalProductStock, setTotalProductStock] =useState("0");
       let   [Small, setSmall] =useState("0");
       let   [Medium, setMedium] =useState("0");
       let   [Large, setLarge] =useState("0");
       let   [xLarge, setXLarge] =useState("0");
       let   [productSize, setProductSize] =useState("");
       let   [productCategory, setProductCategory] =useState([]);
       let   [productType, setProductType] =useState([]);
       let   [productDescription, setProductDescription] =useState("");
       let   [productImage1, setProductImage1] = useState([]);
       let   [productImage2, setProductImage2] = useState([]);
       let   [productImage3, setProductImage3] = useState([]);
          

       let handleFileChange1 = (event) => {
          //  setProductImage1(event.target.files[0])
           image1.current.files=event.target.files[0]
        }   
        let handleFileChange2 = (event) => {
            // setProductImage2(event.target.files[0])
            image2.current.files=event.target.files[0]
        }  
        let handleFileChange3 = (event) => {
            // setProductImage3(event.target.files[0])
            image3.current.files=event.target.files[0]
        }

 
        useEffect( ()=>{
          async function  fetchSingleProducts() { 
            let resp = await axios.get('/product/singleProduct?id='+productID);
            console.log(resp.data);
              setProductTitle(resp.data.productTitle);
              setProductType(resp.data.productType);
              setProductCategory(resp.data.productCategory);
              setProductDescription(resp.data.productDescription);
              setTotalProductStock(resp.data.totalProductStock);
              setSmall(resp.data.productSizeWithStock.Small);
              setMedium(resp.data.productSizeWithStock.Medium);
              setLarge(resp.data.productSizeWithStock.Large);
              setXLarge(resp.data.productSizeWithStock.xLarge);
              setProductPrice(resp.data.productPrice)
              setProductSize({
                Small,
                Medium,
                Large,
                xLarge
              })


      // let  images=[resp.data.productImage1,
      //   resp.data.productImage2,resp.data.productImage3  
      // ]

      // images.forEach((image,index)=>{

      //   const image_uri = image
      //   const image_name = image_uri.split('/').reverse()[0]
      //   const image_name1 = image_name.split('-')[1]
      //   const FinalName = image_name1.split('%').join()
        
      //   console.log(FinalName)
    
      //  let url = 'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg'
      // //  let url= "https://deals-pk.s3.ap-south-1.amazonaws.com/Gul%20Ahmed/productImage1-bootom%20last.jpg-64e37f66-0035-4f54-a172-067defd23fa0"
      //       const toDataURL = url => fetch(url)
      //       .then(response => response.blob())
      //       .then(blob => new Promise((resolve, reject) => {
      //       const reader = new FileReader()
      //       reader.onloadend = () => resolve(reader.result)
      //       reader.onerror = reject
      //       reader.readAsDataURL(blob)
      //     }))
                
      //     // ***Here is code for converting "Base64" to javascript "File Object".***
          
      //     function dataURLtoFile(dataurl, FinalName) {
      //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      //     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      //     while(n--){
      //     u8arr[n] = bstr.charCodeAt(n);
      //     }
      //     return new File([u8arr], FinalName, {type:mime});
      //     }
          
      //     // *** Calling both function ***
          
      //     toDataURL(url)
      //     .then(dataUrl => {
      //     // console.log('Here is Base64 Url', dataUrl)
      //     var fileData = dataURLtoFile(dataUrl,FinalName);
      //     console.log("Here is JavaScript File Object",fileData)
      //     // })
      //     let list = new DataTransfer();
      //     list.items.add(fileData);
      //     let myFileList = list.files;
      //         // let list = new DataTransfer();
      //         // let file = new File([fileData], FinalName);
      //         // list.items.add(file);
      //         // let myFileList = list.files;
      //         console.log(myFileList)
      //         if(index==0){
      //           (image1.current.files=myFileList) 
      //             setProductImage1(myFileList)
                 
      //         }else if(index==1){
      //           (image2.current.files=myFileList) 
      //            setProductImage2(myFileList)
                  
      //         }else if(index==2){
      //           (image3.current.files=myFileList) 
      //           setProductImage3(myFileList)   
                  
      //         }
      //         // console.log({
      //         //   productImage1,
      //         //   productImage2,
      //         //   productImage3
      //         // })
      //       })
      //    })
              
            }
            fetchSingleProducts();
        }, []);


        const handleReset = () => {
          formRef.current.reset();
        }

        useEffect( ()=>{
          setProductSize({
          Small,
          Medium,
          Large,
          xLarge
        })

        let Total=(+Small)+(+Medium)+(+Large)+(+xLarge)
          setTotalProductStock(Total)

        },[Small,Large,Medium,xLarge])
   
      async function UpdateProduct(e){
        e.preventDefault();        
        console.log(totalProductStock)
        setSmall()
        let form = new FormData();        
        form.append("productTitle",productTitle)
        form.append("productPrice",productPrice)
        form.append("productCategory",productCategory)
        form.append("totalProductStock",totalProductStock)
        if(productSize!==""){
        form.append("productSizeWithStock", JSON.stringify(productSize))
        }
        form.append('productQty',1) 
        form.append("productType",productType)
        form.append("productDescription",productDescription)
        form.append("store",currentStore._id)
        if( image1.current.files[0]!=undefined && 
           image2.current.files[0]!=undefined &&
            image3.current.files[0]!=undefined ){
        form.append('productImage1', image1.current.files[0])
        form.append('productImage2',image2.current.files[0]) 
        form.append('productImage3',image3.current.files[0])
        }

        console.log(productSize)
        console.log(
          image1.current.files[0],
          image2.current.files[0],
          image3.current.files[0] 
      )
      
        try{
          let resp = await axios.put(`/product/updateProduct${productID}`, form);
          setProductTitle("")
          setProductPrice("")
          setProductCategory("")
          setTotalProductStock("0")
          setSmall("0")
          setMedium("0")
          setLarge("0")
          setXLarge("0")
          setProductType("")
          setProductDescription("")
          handleReset()         
          toast.success("Product Updated Succesfully ")
          }
       catch(e){
       toast.error("Something Went Wrong")
       console.log(e);
        }

       }
       
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i class="bi bi-bag-check"></i>
               Add Products
            </CardTitle>
            <CardBody>
              <Form onSubmit={e =>{UpdateProduct(e)}} innerRef={formRef} >
              <FormGroup>
                  <Label for="productTitle">Product Title</Label>
                  <Input
                    id="productTitle"
                    name="productTitle"
                    placeholder="Enter Product Title"
                    type="text"
                    value={productTitle}
                    onChange={(evt) =>setProductTitle(evt.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="productPrice">Product Price</Label>
                  <Input
                    id="productPrice"
                    name="productPrice"
                    placeholder="Enter Product Price in Rupee"
                    type="number"
                    value={productPrice}
                    onChange={(evt) =>setProductPrice(evt.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="productStock"> Total Product Stock</Label>
                  <Input
                    id="productStock"
                    name="productStock"
                    placeholder="Enter Total Product Stock"
                    type="number"
                    value={totalProductStock}
                    onChange={(evt) =>setTotalProductStock(evt.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Small">Small Size Stock</Label>
                  <Input
                    id="Small"
                    name="Small"
                    placeholder="Enter Small Size Stock"
                    type="number"
                    value={Small}
                    onChange={(evt) =>setSmall(evt.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Small">Medium Size Stock</Label>
                  <Input
                    id="Medium"
                    name="Medium"
                    placeholder="Enter Medium Size Stock"
                    type="number"
                    value={Medium}
                    onChange={(evt) =>setMedium(evt.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Large">Large Size Stock</Label>
                  <Input
                    id="Large"
                    name="Large"
                    placeholder="Enter Large Size Stock"
                    type="number"
                    value={Large}
                    onChange={(evt) =>setLarge(evt.target.value)}
                    required
                  />
                </FormGroup> <FormGroup>
                  <Label for="xLarge">X-Large Size Stock</Label>
                  <Input
                    id="xLarge"
                    name="xLarge"
                    placeholder="Enter X-Large Size Stock"
                    type="number"
                    value={xLarge}
                    onChange={(evt) =>setXLarge(evt.target.value)}
                    required
                  />
                </FormGroup>

              <FormGroup>
                <Label for="productCategory">Select Product Category</Label>
                <Input id="productCategory" name="productCategory" type="select"
                value={productCategory}
                onChange={(evt) =>setProductCategory(evt.target.value)}
                 required>
                <option>Select Category</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option> 
                </Input>
              </FormGroup>

            <FormGroup>
                <Label for="productType">Select Product Type</Label>
                <Input id="productType" name="productType" type="select"
                 value={productType}
                 onChange={(evt) =>setProductType(evt.target.value)}
                  required>
                <option>Select Type</option>
                  <option>Cotton</option>
                  <option>Fabric</option>
                  <option>Lawn</option>
                  <option>Washanwear</option>
                  <option>Wool</option>
                </Input>
            </FormGroup>
  
             
                <FormGroup>
                  <Label for="productDescription">Product Description</Label>
                  <Input 
                  id="productDescription" 
                  name="text" 
                  type="textarea"
                  value={productDescription}
                  onChange={(evt) =>setProductDescription(evt.target.value)}
                  required
                   />
                </FormGroup>
  
                 <h5  className="warning"> <strong> Note: </strong> 
                  If you want to change one picture then reselect others too.
                 </h5>
                <FormGroup>
                  <Label for="exampleFile">Picture 1</Label>
                  <Input 
                  // files={productImage1} 
                  onChange={handleFileChange1} innerRef={image1}  id="exampleFile" name="file" accept="image/*" type="file"
                   />
                  <FormText>
                      Choose Picture If You Want to Update
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">Picture 2</Label>
                  <Input 
                  // files={productImage2} 
                  onChange={handleFileChange2}  innerRef={image2}  id="exampleFile" name="file" accept="image/*" type="file" />
                  <FormText>
                  Choose Picture If You Want to Update
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">Picture 3</Label>
                  <Input 
                  // files={productImage3}
                   onChange={handleFileChange3} innerRef={image3}  id="exampleFile" name="file" accept="image/*" type="file" />
                  <FormText>
                  Choose Picture If You Want to Update
                  </FormText>
                </FormGroup>
                
                <Button>Update</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddProduct;
  
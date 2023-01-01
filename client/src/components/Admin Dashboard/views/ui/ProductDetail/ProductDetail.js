import "./ProductDetail.css"
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import ProductSlider from './ProductSlider'
import { Link } from "react-router-dom";
export default()=>{
    let [products, setProducts] = useState([]);

    let sizeSelection1=useRef('')
    let sizeSelection2=useRef('')
    let sizeSelection3=useRef('')
    let sizeSelection4=useRef('')

    useEffect( ()=>{
        async function fetchProduct() {
        let resp = await axios.get("/product/allproducts");
        console.log(resp.data);
        setProducts(resp.data);
    }
    fetchProduct();
        }, []);
  
       
    
    let {productID} = useParams();
     console.log(productID)
    useEffect( ()=>{
        async function fetchProduct() {
            if(productID!==undefined){
        let resp = await axios.get(`/product/${productID}`);
        console.log(resp.data)
    }}
    fetchProduct();
        }, []);
        
    
       
 return <>
    {products.map((product)=>{  
if(productID==product._id){
        return(
           < div class="bg-codeblocks">
            <div class="main-box-codeblocks">
                <div class="container">
        
                    <div class="row">
                        <div className="col-md-6 responsive" >
                            <div class="box-image-codeblocks">
                               
                        <ProductSlider image1={product.productImage1} image2={product.productImage2} image3={product.productImage3} title={product.productTitle}/>
                                
                            </div>
                        </div>
                        <div class="col-md-6" id="uniqueness">
                            <h2 class="text-bold text-strong">{product.productTitle}</h2>
                            <span>
                                <h1>${product.productPrice}</h1>
                            </span>
                            <div style={{fontSize:'24px'}}>{product.totalProductStock !==0 ?"Available sizes" : "Out of stock"}</div>
                            <div>
                            { product.productSizeWithStock.Small != "0" ?<button className="size2" ref={sizeSelection1} >S</button>: null }
                            { product.productSizeWithStock.Medium != "0" ?<button className="size2" ref={sizeSelection2} >M</button>: null }
                            { product.productSizeWithStock.Large!= "0" ?<button className="size2" ref={sizeSelection3}>L</button>: null }
                            { product.productSizeWithStock.xLarge != "0" ?<button className="size2" ref={sizeSelection4}>xL</button>: null }
                            </div>
                          
                            <span class="description-codeblocks">
        
                                <p style={{marginTop:'24px',color:'black',fontSize:'18px'}}>
                                    <strong>Description:</strong> <br/>
                                    <span class="text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas ratione! Numquam corrupti atque amet accusantium, perspiciatis totam alias qui ea cum tempora et sit ex nihil doloremque recusandae nesciunt.
                                    </span>
                                </p>
                            </span>
        

                            {/* <button type="button"class="btn btn-primary btn-lg btn-lg">Add To Cart</button> */}
                        </div>
                        
                    </div>
        

                </div>
            </div>
        </div>
)}
})}
  
  {/* <ProductSlider image1={product.productImage1} image2={product.productImage2} image3={product.productImage3} title={product.productTitle}/> */}
{/* <div id="product">
    
    <div class="product_images">
        <img id="myImage4" src="mens2.jpg" alt=""/>
    </div>
   
    <div class="product_details">
        <div class="back">
            <span class="material-symbols-outlined">chevron_left</span>
        </div>

        <h2>The Atelier Tailored Coat</h2>
        <h3>$499.00</h3>

        <div class="about">
            <p>Availability :<span>In stock</span></p>
            <p>Product Code : <span>#4657</span></p>   
            <p>Tags : <span>Fashion, Hood, Classic</span> </p>
        </div>

        <p className="txt_adjust">Sleek, polished, and boasting an impeccably modern fit, this blue, 2-but-
            ton Lazio suit features a notch lapel, flap pockets, and accompanying flat
            front trousers—all in pure wool by Vitale Barberis Canonico.</p>
        <ul>
            <li>Dark blue suit for a tone-on-tone look</li>
            <li>Regular fit</li>
            <li>100% Cotton</li>
            <li>Free shipping with 4 days delivery</li>
        </ul>

        <a >Clear Selection</a>
        
        <div class="cta">
            <div class="btn btn_primary">add to cart</div>
            <div class="btn btn_outline_secondary">
                <span class="material-symbols-outlined">favourite</span><span id="see">add to wishlist</span><i id="icv" class="fa-sharp fa-solid fa-heart"></i></div>
        </div>
    </div>
</div> */}

 
 </>

}
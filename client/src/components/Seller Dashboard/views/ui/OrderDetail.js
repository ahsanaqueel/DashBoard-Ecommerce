import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Table,Button } from "reactstrap";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import CurrentStore from "../../layouts/CurrentStore";
import axios from 'axios';

export default()=>{
    
 let  {orderID}=useParams()

 let currentStore=CurrentStore()
  
    let [order ,setOrder] = useState([]);
    let [reFetch,setReFetch]=useState("");

     useEffect( ()=>{
       async function fetchStoreProducts() { 
         if(currentStore._id!==undefined){
         let resp = await axios.get('/order/sortorder?id='+currentStore._id);
        //  console.log(resp.data);
         setOrder(resp.data);
         }
       }
       fetchStoreProducts();
 
   }, [reFetch,currentStore]);

   let   orderDetail = order.filter( order => order._id == orderID) ;
   console.log(orderDetail) 
  
 
    return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Products Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Products
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Product Size  </th>
                <th>Prize</th>
                <th>Product Quantity  </th>
                <th>Total Prize</th>
               
              </tr>
            </thead>
   { orderDetail.map((orders, index) => (
     orders.orderProducts.map((tdata, index)=>(
            <tbody>
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.productImage}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <p className="mb-0">{tdata.productTitle}</p>             
                      </div>
                    </div>
                  </td>
                  <td>
                  {tdata.size}
                   </td>
                  
                  <td>{tdata.productPrice}</td>
                  <td>{tdata.productQuantity}</td>
                  <td>{tdata.productPrice*tdata.productQuantity}</td>
                  
                </tr>
            </tbody>)
        )))
        }
          </Table>
        </CardBody>
      </Card> 
    </div>    
    )
    }
  

import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentStore from "../../layouts/CurrentStore";


const OrdersTables = () => {

  let currentStore=CurrentStore()
  
  let [order ,setOrder] = useState([]);
  let [reFetch,setReFetch]=useState("");

      useEffect( ()=>{
        async function fetchStoreProducts() { 
          if(currentStore._id!==undefined){
          let resp = await axios.get('/order/sortorder?id='+currentStore._id);
          console.log(resp.data);
          setOrder(resp.data);
          }
        }
        fetchStoreProducts();
  
    }, [reFetch,currentStore]);
    
  return (
    <>
       {/* New Orders Table */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">  New Orders Listing </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the New Orders
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Customer Detail</th>
                <th>Customer Address</th>
                <th>Order Details</th>
                <th>Order Amount</th>          
               </tr>
            </thead>
            <tbody>
              {order.map((tdata, index) =>  (
            
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                     
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.customerName}</h6>
                        <span className="text-muted">{tdata.customerEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.customerAddress}</td>
                  <td>
                   <Link className=" text-secondary py-3 link" 
                   to={`/SellerDashboard/OrdersDetail${tdata._id}`}>
                   View Order Details 
                   &nbsp;
                  <i className="bi bi-eye "></i>
                   </Link>
                  </td>
                  <td>{tdata.orderAmount}</td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default OrdersTables;

                    {/* {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )} */}

               
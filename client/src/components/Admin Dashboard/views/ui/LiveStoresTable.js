import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, Modal, ModalFooter,
  ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import StoreProducts from "./StoreProducts"
import React from "react";
const OrdersTables = () => {


  let [store,setStore]=useState([]);
  let [reFetch,setReFetch]=useState("");

      useEffect( ()=>{
        async function fetchStores() { 
          let resp = await axios.get('/store/allstores');
          console.log(resp.data);
          setStore(resp.data);
        }
        fetchStores();  
        }, [reFetch]);

      // Modal open state
      const [modal, setModal] = React.useState(false);
        
      // Toggle for Modal
      const toggle = () =>{
        setModal(!modal);
      }  
              
      const toggle1 = () =>{
        setModal(!modal);
        // navigate("/")
      } 
  
  return (
    <div>

         {/* Approve Stores Table */}
         <Card>
        <CardBody>
          <CardTitle tag="h5">  Live Stores Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Orders
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Store Detail</th>
                <th>Store Address</th>
                <th>Owner CNIC</th>
                <th>Store NTN</th>
                <th>Store Products</th>
                <th>Actions</th>
           
              </tr>
            </thead>
            <tbody>
              {store.map((tdata, index) =>tdata.storeStatus=="approve"? (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.storeLogo}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.storeName}</h6>
                        <div className="text-muted">{tdata.storePhoneNo}</div>
                        <span className="text-muted">{tdata.storeEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.storeAddress}</td>
                  <td>
                  
                  {tdata.storeOwnerCnic}
                  </td>
                  <td>{tdata.storeNTN}</td>
                  <td>   
                  <Link
                    to={`/AdminDashboard/StoreProducts${tdata._id}`}
                    className=" text-secondary py-3 link"
                  >
                    View Products &nbsp;
                    <i class="bi bi-eye"></i>
                  </Link>
                </td>

                 <td> 
                 <Button  className="Reject"
                  onClick={async()=>{
                    let resp = await axios.put(`/store/storeStatus/${tdata._id}`,
                     {
                        storeStatus:"block"
                     }
                    )
                    setReFetch(resp.data) 
                    }}
                 > <i class="bi bi-slash-circle-fill"></i></Button>

                  <Button className="Reject"
                       onClick={async()=>{
                    let resp = await axios.delete(`/store/storedelete/${tdata._id}`
                     
                    )
                    setReFetch(resp.data) 
                    }}
                     
                  ><i class="bi bi-trash3"></i></Button>
                 
                 </td>
                </tr>
              ):null)}
            </tbody>
          </Table>
        </CardBody>
      </Card>
   
       {/* <div style={{
           display: 'block', width: 700, padding: 30
        }}>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}> Store Products  </ModalHeader>
                <ModalBody>
                      <StoreProducts    /> 
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Okay</Button>
                </ModalFooter>
            </Modal>
    </div >  */}

    </div>
  );
};

export default OrdersTables;

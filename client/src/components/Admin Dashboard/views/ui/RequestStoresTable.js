import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

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

      
  return (<>
             {/* New Stores Table */}
      <Card>
      <CardBody>
        <CardTitle tag="h5">  New Stores Listing</CardTitle>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {store.map((tdata, index) =>tdata.storeStatus=="pending"? (
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
                <td >
                <Button  className="Approve"
                 onClick={async()=>{
                    let resp = await axios.put(`/store/storeStatus/${tdata._id}`,
                     {
                        storeStatus:"approve"
                     }
                    )
                    setReFetch(resp.data) 
                    }}
                ><i class="bi bi-patch-check  "></i></Button> 
                <Button className="Reject"
                  onClick={async()=>{
                    let resp = await axios.put(`/store/storeStatus/${tdata._id}`,
                     {
                        storeStatus:"rejected"
                     }
                    )
                    setReFetch(resp.data) 
                    }}
                ><i className="bi bi-x-square "></i></Button>
                </td>
              </tr>
               ):null)}
          </tbody>
        </Table>
      </CardBody>
    </Card>


      {/* Rejected Stores Table */}
      <Card>
        <CardBody>
          <CardTitle tag="h5"> Rejected Stores Listing</CardTitle>
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
           
              </tr>
            </thead>
            <tbody>
              {store.map((tdata, index) =>tdata.storeStatus=="rejected" ?(
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
                        <span className="text-muted">{tdata.storeEmailmail}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.storeAddress}</td>
                  <td>
                  {tdata.storeOwnerCnic}
                  </td>
                  <td>{tdata.storeNTN}</td>
                </tr>
              ):null)}
            </tbody>
          </Table>
        </CardBody>
      </Card>

   </>
    );
};

export default OrdersTables;
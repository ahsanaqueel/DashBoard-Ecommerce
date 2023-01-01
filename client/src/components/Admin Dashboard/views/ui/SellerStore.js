import { Row, Col, Table, Card, CardTitle, CardBody ,CardSubtitle,Button} from "reactstrap";
import { Link,useParams} from "react-router-dom";
import axios from 'axios'
import { useEffect ,useState} from "react";
const Tables = () => {

    let [store,setStore]=useState([]);
    let [reFetch,setReFetch]=useState("");
    let {sellerID} = useParams();
        useEffect( ()=>{
          async function fetchStores() { 
            let resp = await axios.get('/store/currentstore?id='+sellerID);
            console.log(resp.data);
            setStore(resp.data);
          }
          fetchStores();  
          }, [reFetch]);
  
  return (
    <Row>
      <Col lg="12">
      <Card>
        <CardBody>
          <CardTitle tag="h5">  Live Stores Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Orders
          </CardSubtitle>
        {store.map((tdata, index) => (
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Store Detail</th>
                <th>Store Address</th>
                <th>Owner CNIC</th>
                <th>Store NTN</th>
                <th>Store Products</th>
                 { tdata.storeStatus=="approve" ? <th> Action </th> : <th> Store Status </th> } 
              </tr>
            </thead>
            <tbody>
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
                 { tdata.storeStatus=="approve" ?
                 <>
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
                  </> 
                 :tdata.storeStatus=="block" ? <strong> Store Blocked </strong>:
                 tdata.storeStatus=="pending" ? <strong> Store Pending </strong>:
                 tdata.storeStatus=="reject" ? <strong> Store Rejected </strong>:
                 null  }
                 </td>
                 
                </tr>
            </tbody>
          </Table>
              
              )) }

        </CardBody>
      </Card>
      </Col>
    </Row>
  );
};

export default Tables;

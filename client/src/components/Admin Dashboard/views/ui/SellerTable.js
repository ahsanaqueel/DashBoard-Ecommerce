import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Table,Button } from "reactstrap";
import axios from 'axios'
import { useEffect ,useState} from "react";



const ProjectTables = () => {

  let [seller,setSeller]=useState([]);
  let [abc,setAbc]=useState("");

    useEffect( ()=>{
      async function fetchProducts() { 
        let resp = await axios.get('/user/allusers');
        console.log(resp.data);
        setSeller(resp.data);
      }
      fetchProducts();  
      }, [abc]);

  return (
     <div>
  <Card>
        <CardBody>
          <CardTitle tag="h5">  New Stores Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Sellers
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Seller Store</th>
                {/* <th>Actions</th> */}
                
              </tr>
            </thead>
            <tbody>
              {seller.map((tdata, index) => tdata.role=="Seller" ?(
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.userImage}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.email}</td>
                 <td>   
                  <Link
                    to={`/AdminDashboard/SellerStore${tdata._id}`}
                    className=" text-secondary py-3 link"
                  >
                     View Store &nbsp;
                    <i className="bi bi-eye "></i>
                   </Link>    </td>                
                </tr>
              ):null)}
            </tbody>
          </Table>
        </CardBody>
      </Card>

    </div>
  );
};

export default ProjectTables;

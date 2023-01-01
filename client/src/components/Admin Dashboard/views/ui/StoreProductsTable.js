import { useEffect ,useState} from "react";
import { Link ,useParams} from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Table,Button } from "reactstrap";
import axios from 'axios'


const ProjectTables = () => {

  let [product,setProduct]=useState([]);
  let [reFetch,setReFetch]=useState("");
  let {storeID} = useParams();
      useEffect( ()=>{
        async function fetchProducts() { 
          let resp = await axios.get('/product/storeproducts?id='+storeID);
          console.log(resp.data);
          setProduct(resp.data);
        }
        fetchProducts();  
        }, [reFetch]);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5"> Store Products Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Product Sizes </th>
                <th>Product Detail</th>
                <th>Prize</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.productImage1}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.productTitle}</h6>
                   
                      </div>
                    </div>
                  </td>
                  <td>
                    <span> Small: { tdata.productSizeWithStock.Small},  </span>
                    <span> Medium: { tdata.productSizeWithStock.Medium} , </span>
                    <span> Large: { tdata.productSizeWithStock.Large},  </span>
                    <div> X-Large: {tdata.productSizeWithStock.xLarge}   </div>
                   </td>
                  <td>
                  <Link className=" text-secondary py-3 link"
                   to={`/AdminDashboard/ProductDetail${tdata._id}`}>
                   View Product Detail
                   &nbsp;
                  <i className="bi bi-eye "></i>
                  </Link>
                  </td>
                  <td>{tdata.productPrice}</td>
                  <td>{tdata.totalProductStock}</td>
                  <td>
                  <Button className="Reject"
                    onClick={async()=>{
                    let resp = await axios.delete(`/product/${tdata._id}`)
                    setReFetch(resp.data) 
                    }}
                  ><i class="bi bi-trash3"></i></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;

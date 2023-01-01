import ProductsFeaturedTable from "./ProductFeaturedTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProductsFeaturedTable />
      </Col>
      
      
    </Row>
  );
};

export default Tables;

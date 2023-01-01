import OrdersTable from "./OrdersTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <OrdersTable/>
      </Col>
    </Row>
  );
};

export default Tables;

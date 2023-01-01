import UsersTable from "./SellerTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <UsersTable/>
      </Col>
    </Row>
  );
};

export default Tables;

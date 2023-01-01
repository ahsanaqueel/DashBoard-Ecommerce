import { Col, Row } from "reactstrap";
import TopCards from "../layouts/components/dashboard/TopCards";
import CurrentStore from "../layouts/CurrentStore"


const Starter = () => {

  let user =localStorage.getItem("currentUser")
  
  let currentStore=CurrentStore()

  return (currentStore.storeStatus ?
  currentStore.storeStatus==undefined && user ||currentStore.storeStatus=="rejected" && user ? currentStore.storeStatus==undefined ?
   <h1> First Create Store to Access Full Featured Dashboard </h1> :
   currentStore.storeStatus=="rejected"? <>
   <h3> Request Rejected Again Create Store to Access Full Featured Dashboard </h3>
   <h3>Contact To Admin to Know the Reason of Cancellation </h3>
   </>
   : null
   : <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Yearly Earning"
            earning="$21k"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Refund given"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
    </div>
 :null );
};

export default Starter;

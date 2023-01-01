import { Outlet } from "react-router-dom";
import Sidebar from "./SDSidebar";
import SidebarCS from "./SDSidebarCS";
import Header from "./SDHeader";
import { Container } from "reactstrap";
import CurrentStore from "./CurrentStore";
const FullLayout = () => {
       

let currentStore=CurrentStore()
    // let  user={
    //     Store : "True"
    //   }
    let user=localStorage.getItem("currentUser")
 
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}

        <aside className="sidebarArea shadow" id="sidebarArea">
         { currentStore.storeStatus==undefined && user ||currentStore.storeStatus=="rejected" && user
           ? <SidebarCS /> :currentStore.storeStatus=="approve" && user ? <Sidebar/>: null}
        </aside>

        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet/>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;

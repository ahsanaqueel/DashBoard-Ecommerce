import React from "react";
import { Link,useNavigate } from "react-router-dom";
import store from "../../../Store/Store"
import CurrentStore from "./CurrentStore";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user2 from "../assets/images/users/user2.jpg";

const Header = () => {
  let navigate=useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  let currentStore=CurrentStore()

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" className="DHeader" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          // color="secondary"
          className="d-lg-none DHeader"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          // color="secondary"
          size="sm"
          className="d-sm-block d-md-none DHeader "
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
             <h2   className="storeName">{ currentStore.storeStatus=="approve"? currentStore.storeName : "Store Name"} </h2>
          </NavItem>
          
        </Nav>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle  className="DHeader" >
            <img
              src={currentStore.storeStatus=="approve"?currentStore.storeLogo:user2}
              alt="profile"
              className="rounded-circle"
              width="40"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem 
             onClick={
              ()=>{
                store.dispatch({
                    type:"USER_LOGGED_OUT"
                  })
                  navigate("/")
              }
            }    
            >Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>

      {/* <Nav>
       <NavItem>
             <img
               src={currentStore.storeStatus=="approve"?currentStore.storeLogo:user2}
               alt="storeLogo"
               className="rounded-circle"
               width="40"
             />
       </NavItem>
       </Nav> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;

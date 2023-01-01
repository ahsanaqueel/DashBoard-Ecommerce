import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";

import { Link, useLocation } from "react-router-dom";

const ProductNavigation = [
 
  {
    title: "Add Product",
    href: "/SellerDashboard/AddProduct",
    icon: "bi bi-bag-check",
  },
  
  {
    title: "Products",
    href: "/SellerDashboard/Products",
    icon: "bi bi-bag-check",
  },
  {
    title: " Featured Product",
    href: "/SellerDashboard/FeaturedProducts",
    icon: "bi bi-bag-check",
  },
 
];

const OrderNavigation = [
 
  {
    title: "Orders",
    href: "/SellerDashboard/Orders",
    icon: "bi bi-cart3",
  },

];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none  "
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">

        <NavItem><strong> Home </strong> </NavItem>
        <NavItem  className="sidenav-bg">
              <Link
                to={"/SellerDashboard/starter"}
                className={
                  location.pathname === "/SellerDashboard/starter"
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-3 d-inline-block">Dashboard</span>
              </Link>
            </NavItem>
            <NavItem><strong> Product </strong> </NavItem>
          {ProductNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3 "
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

          <NavItem><strong> Order </strong> </NavItem>
          {OrderNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3 "
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

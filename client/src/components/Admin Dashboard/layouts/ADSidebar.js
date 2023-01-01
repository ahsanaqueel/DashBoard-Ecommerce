import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const StoreNavigation = [
 
  {
    title: "Live Stores ",
    href: "/AdminDashboard/LiveStores",
    icon: "bi bi-shop",
  },
  {
    title: "Stores Request ",
    href: "/AdminDashboard/StoresRequests",
    icon: "bi bi-shop",
  },{
    title: "Blocked Stores ",
    href: "/AdminDashboard/BlockedStores",
    icon: "bi bi-shop",
  },
  
 
];


const ProductNavigation = [
 
 {
   title: "Products",
   href: "/AdminDashboard/Products",
   icon: "bi bi-bag-check",
 },
 {
   title: "FeaturedProducts",
   href: "/AdminDashboard/FeaturedProducts",
   icon: "bi bi-patch-check",
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
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
         
        <Nav vertical className="sidebarNav">
        <NavItem><strong> Home </strong> </NavItem>
        <NavItem  className="sidenav-bg">
              <Link
                to={"/AdminDashboard/starter"}
                className={
                  location.pathname === "/AdminDashboard/starter"
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-3 d-inline-block">Dashboard</span>
              </Link>
            </NavItem>

          <NavItem><strong> User </strong> </NavItem>
        <NavItem  className="sidenav-bg">
              <Link
                to={"/AdminDashboard/Users"}
                className={
                  location.pathname === "/AdminDashboard/Users"
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className= "bi bi-people"></i>
                <span className="ms-3 d-inline-block">Users</span>
              </Link>
            </NavItem>

        <NavItem><strong> Store  </strong> </NavItem>
          {StoreNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}     

          <NavItem><strong> Product </strong> </NavItem>
          {ProductNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}  
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

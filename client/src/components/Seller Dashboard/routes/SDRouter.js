import { lazy } from "react";
import { Navigate } from "react-router-dom";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/SDFullLayout.js"));


/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const CreateStore = lazy(() => import("../views/ui/CreateStore"));
const AddProducts= lazy(() => import("../views/ui/AddProducts"));
const UpdateProducts= lazy(() => import("../views/ui/UpdateProduct"));
const Products= lazy(() => import("../views/ui/Products"));
const ProductDetail= lazy(() => import("../views/ui/ProductDetail/ProductDetail"));
const OrderDetail= lazy(() => import("../views/ui/OrderDetail"));
const FeaturedProducts= lazy(() => import("../views/ui/FeaturedProductTable"));
const Orders= lazy(() => import("../views/ui/Orders"));



/*****Routes******/

const ThemeRoutes = [

  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="starter"/> },
      { path: "/CreateStore", exact: true, element: <CreateStore/> },
      { path: "/AddProduct", exact: true, element: <AddProducts/> },
      { path: "/UpdateProduct:productID", exact: true, element: <UpdateProducts/> },
      { path: "/Products", exact: true, element: <Products/> },
      { path: "/FeaturedProducts", exact: true, element: <FeaturedProducts/> },
      { path: "/Orders", exact: true, element: <Orders/> },
      { path: "/OrdersDetail:orderID", exact: true, element: <OrderDetail/> },
      { path: "/productDetail:productID", exact: true, element: <ProductDetail/> },
      { path: "/starter", exact: true, element: <Starter /> },      
    ],
  },
];

export default ThemeRoutes;

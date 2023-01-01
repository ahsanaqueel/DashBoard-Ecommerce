import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/ADFullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Products= lazy(() => import("../views/ui/Products"));
const ProductDetail= lazy(() => import("../views/ui/ProductDetail/ProductDetail"));
const Sellers= lazy(() => import("../views/ui/Sellers"));
const LiveStores= lazy(() => import("../views/ui/LiveStores"));
const BlockedStores= lazy(() => import("../views/ui/BlockStores"));
const RequestStores= lazy(() => import("../views/ui/RequestStores"));
const FeaturedProducts= lazy(() => import("../views/ui/ProductFeatured"));
const StoreProducts= lazy(() => import("../views/ui/StoreProducts"));
const SellerStore= lazy(() => import("../views/ui/SellerStore"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      // { path: "/", element: <Navigate to="/" /> },
      { path: "/Products", exact: true, element: <Products /> },
      { path: "/LiveStores", exact: true, element: <LiveStores/> },
      { path: "/StoresRequests", exact: true, element: <RequestStores/> },
      { path: "/BlockedStores", exact: true, element: <BlockedStores/> },
      { path: "/Users", exact: true, element: <Sellers /> },
      { path: "/FeaturedProducts", exact: true, element: <FeaturedProducts /> },
      { path: "/StoreProducts:storeID", exact: true, element: <StoreProducts/> },
      { path: "/SellerStore:sellerID", exact: true, element: <SellerStore/> },
      { path: "/productDetail:productID", exact: true, element: <ProductDetail/> },
      { path: "/starter", exact: true, element: <Starter /> },
      
    ],
  },
];

export default ThemeRoutes;

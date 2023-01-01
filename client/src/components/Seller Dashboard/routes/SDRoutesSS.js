import { lazy } from "react";
import { Navigate } from "react-router-dom";


/****Layouts*****/
const StoreStatus = lazy(() => import("../layouts/SDStoreStatus"));

/*****Routes******/

const ThemeRoutesSS = [

  {
    path: "/",
    element: <StoreStatus/>,
  
  },
];

export default ThemeRoutesSS;

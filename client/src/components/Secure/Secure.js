import React from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export  function  SecureSellerRoutes(props) {
   let reducer = useSelector((store) => {
      return store.userReducer;
    });
  
    return reducer.state == "loaded" ? (
      localStorage.getItem("someToken") && reducer.currentUser.role == "Seller" ? (
        props.children
      ) : reducer.currentUser.userType != "Seller" ? (
        <Navigate to="/" />
      ) : (
        <Navigate to="/" />
      )
    ) : reducer.state == "session_failed" ? (
      <Navigate to="/" />
    ) : null;

}


export  function  SecureAdminRoutes(props) {
    let reducer = useSelector((store) => {
       return store.userReducer;
     });
   
     return reducer.state == "loaded" ? (
       localStorage.getItem("someToken") && reducer.currentUser.role == "Admin" ? (
         props.children
       ) : reducer.currentUser.userType != "Admin" ? (
         <Navigate to="/" />
       ) : (
         <Navigate to="/" />
       )
     ) : reducer.state == "session_failed" ? (
       <Navigate to="/" />
     ) : null;
 
 }
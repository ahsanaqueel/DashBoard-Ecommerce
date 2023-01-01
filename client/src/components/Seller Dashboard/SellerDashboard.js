import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/SDRouter";
import ThemeroutesSS from "./routes/SDRoutesSS";
import { useState,useEffect} from "react";
import axios from "axios";

const SellerDashboard = () => {

  let   [currentStore ,setCurrentStore] =useState([{}])
  let   [nowRun ,setNowRun] =useState("")
        
    let user=localStorage.getItem("currentUser")
    let currentUser=JSON.parse(user)
    let currentUsers=JSON.parse(currentUser)
    
    useEffect( ()=>{
    async function fetchStores() { 
      let resp = await axios.get('/store/currentstore?id='+currentUsers._id);
      // console.log(resp.data);
      if(resp.data!=""){
        setCurrentStore(resp.data);
      }
      setNowRun("Run")
    }
    fetchStores();  
    },[]);


  const routing = useRoutes(Themeroutes);
  const routingSS = useRoutes(ThemeroutesSS);

  return nowRun=="Run"?   currentStore[0].storeStatus == "pending" 
  ||   currentStore[0].storeStatus == "block"
  ?<div className="dark">{routingSS}</div>
  : currentStore[0].storeStatus == "approve" &&  user ||
   currentStore[0].storeStatus == undefined || currentStore[0].storeStatus == "rejected" ? 
  <div className="dark">{routing}</div>:null:null

};

export default SellerDashboard;

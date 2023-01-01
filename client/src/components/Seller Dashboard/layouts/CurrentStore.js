import { useState,useEffect} from "react";
import axios from "axios";


export default   () => {

    let   [currentStore ,setCurrentStore] =useState([{}])
    
      let user=localStorage.getItem("currentUser")
      let currentUser=JSON.parse(user)
      let currentUsers=JSON.parse(currentUser)
      
      console.log(currentUsers)
      
      
    useEffect( ()=>{
      async function fetchStores() { 
        let resp = await axios.get('/store/currentstore?id='+currentUsers._id);
        console.log(resp.data);
        if(resp.data!=""){
          setCurrentStore(resp.data);
        }
      }
      fetchStores();  
    },[]);
   
          return currentStore[0]
}
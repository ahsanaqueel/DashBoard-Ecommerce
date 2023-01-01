import './login.css'
import store from "../../Store/Store"
import { useState,useEffect} from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/scss/main.scss'
import Links from '../Signup/Navigationlink';
export default ()=>{
  
      let navigate = useNavigate();
  
      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
    
      

   async function loginUser(e){

    e.preventDefault(); 

    let milgyUser = await axios.post('/user/login', {
        email,
        password,
        })
        
        if(milgyUser.data!=="User Not Found"){
            setEmail("");
            setPassword("");
      localStorage.setItem("someToken", milgyUser.data.token);
            store.dispatch({
              type:"USER_LOGGED_IN",
              payload:milgyUser.data.user
            });
            if(milgyUser.data.user.role == "Admin")  {
              navigate("/AdminDashboard")
              
            } else if(milgyUser.data.user.role == "Seller"){
              navigate("/SellerDashboard")
            }

          toast.success(" Succesfully Login");
        }else{
            toast.error("User Not Exist")          
        }
     
    }

    return(
        <div className="App">
        <div className="appAside"/>
        <div className="appForm">
         <Links/>
        <div className="formCenter">
        <form className="formFields" onSubmit={loginUser}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              required
              onChange={(evt) =>setEmail(evt.target.value)}
            />
          </div>
       
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              required
              onChange={(evt) =>setPassword(evt.target.value)}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/Signup" className="formFieldLink">
              Create an account
            </Link>
          </div>

          
        </form>
        </div>
        </div>
        </div>
      
    );
  }
    
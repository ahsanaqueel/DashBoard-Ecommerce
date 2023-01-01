import './App.css';
import store from "././Store/Store"
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import { Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import SellerDashboard from './components/Seller Dashboard/SellerDashboard';
import AdminDashboard from "./components/Admin Dashboard/Admin Dashboard";
import {SecureSellerRoutes} from './components/Secure/Secure';
import {SecureAdminRoutes} from './components/Secure/Secure';
 const App = () => {

  useEffect( ()=>{
          async function sessionkaro(){
              let resp = await axios.get('/user/session-check?token='+localStorage.getItem("someToken"))
              if(resp.data){
                store.dispatch({
                  type:"USER_LOGGED_IN",
                  payload:resp.data
                });
              }else{
                store.dispatch({
                  type:"session_failed"            
                }); 
            }          
          }
          sessionkaro();
        }, [])

  return (
    <Provider store={store}> 
    <Router>
        <Routes>
        <Route exact path='/' element={<Login/>}/> 
        <Route exact path='/SignUp' element={<Signup/>}/> 
        <Route exact path='/SellerDashboard/*' element={
        <SecureSellerRoutes>
           <SellerDashboard/> 
        </SecureSellerRoutes>
        }/> 
        <Route exact path='/AdminDashboard/*' element={
        <SecureAdminRoutes>
           <AdminDashboard/>
        </SecureAdminRoutes>
        }/> 
        </Routes>
    </Router>
    <ToastContainer/>
    </Provider>
  );
}

export default App;

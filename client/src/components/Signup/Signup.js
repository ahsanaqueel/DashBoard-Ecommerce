import './signup.css'
import {useForm, } from 'react-hook-form';
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/scss/main.scss'
import Links from './Navigationlink';
export default ()=>{

    let navigate = useNavigate();
    
    let data = useForm();
    

//  let  cartItem = {
//     products:products,
//     productqty : 1
//     type : Small
//    }

//    setCartItem(cartItem)


    async function saveUser(meraData){

        let form = new FormData();        
        form.append("name",meraData.name)
        form.append("email",meraData.email)
        form.append("password",meraData.password)
        form.append("role","Seller")
        form.append("userImage",meraData.file[0])

        meraData.file = meraData.file[0]

        console.log(meraData);    
          
        try{
               let resp = await axios.post('/user/signup', form);
               if(resp.data=="User Already Exists"){
                toast.error("Email Already Exist "); 
                // setEmail("")
              }
                else{
                  data.reset();
                  toast.success("User Created Successfully");
                }
        }
        catch(e){
            toast.error("User Already Exist ")
            console.log(e);
        }
    
    }
    return (
        <div className="App">
        <div className="appAside"/>
        <div className="appForm">
         <Links/>
        <div className="formCenter">
           <form  className="formFields" onSubmit={data.handleSubmit(saveUser)}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                Full Name
              </label>
              <input
                {...data.register('name', {required:true})}
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="Enter your full name"
                name="name"
              />
             {data.formState.errors.name && <div className="error">Name Missing</div>}
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
                required
          {...data.register('password', {required:true, minLength:6, validate:(some)=>{
                    for(let item of some){
                        let code  = item.charCodeAt();
                        if( code >=65 && code <=90){
                        return true;
                        }
                    }
                    return false;
                }})}
              />
         {data.formState.errors.password && data.formState.errors.password.type == "required" && <div className="error">Password Missing</div>}
         {data.formState.errors.password && data.formState.errors.password.type == "minLength" &&<div className="error">Password Minimum length is 6</div>}
         {data.formState.errors.password && data.formState.errors.password.type == "validate" &&<div className="error">Password Should have 1 capital letter</div>}
            </div>

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
                required
                {...data.register('email', {required:true})}
              />
         {data.formState.errors.email && <div className="error">Email Missing</div>} 
            </div>


            <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
                Profile Picture
              </label>
                <input 
                id="file"
                className="formFieldInput"
                type="file"
                name='ProfilePicture'
                accept="image/*"
                 {...data.register('file', {required:true})}
                 />
          {data.formState.errors.email && <div className="error">Picture Missing</div>}                  
            </div>

            <div className="formField">
              <label className="formFieldCheckboxLabel">
                <input
                  className="formFieldCheckbox"
                  type="checkbox"
                  name="hasAgreed"
                  required
                />{" "}
                I agree all statements in{" "}
                <a href="null" className="formFieldTermsLink">
                  terms of service
                </a>
              </label>
            </div>
  
            <div className="formField">
              <button className="formFieldButton">Sign Up</button>{" "}
              <Link to="/" className="formFieldLink">
                I'm already Seller
              </Link>
            </div>
          </form>
        </div>
        </div>
        </div>
       
      );
    }
  
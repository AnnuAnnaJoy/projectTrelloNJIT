import Axios from 'axios';
import React ,{ useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';



function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
   
   


 
 
 const addEmp = (e) => {
     if(password !== cpassword){
         alert("not match");
     }else{
        Axios.post('http://localhost:3001/register',
        {
           name: name,
          email:email,
           password:password
         
        }).then((result)=>{
            alert(result.data);
           props.history.push('/login');
        })
       .catch(err=>{
           alert(err.response.data);
       
       })
     }
    
   
 }




    return (
        <div className='log'>
          
                <div className='log__container'>
                <h1>SignUp</h1>

                
                    <h5>Name</h5>
                    <input type='text'  name='name' value={name}  onChange={(e) =>{setName(e.target.value)}} required />
                   
                    <h5>Email</h5>
                    <input type='email'  name='email' value={email}  onChange={(e) =>{setEmail(e.target.value)}}  required/>

                    <h5>Password</h5>
                    <input type='password'  name='password'  value={password}   onChange={(e) =>{setPassword(e.target.value)}} required />
                  
                    <h5>Confirm Password</h5>
                    <input type='password'  name='password'  value={cpassword}   onChange={(e) =>{setCpassword(e.target.value)}} required />
                   
                    <button  onClick={addEmp} className='login__signInButton'>Register</button>
                    <p>Have Already an account ?<Link to="/login">login</Link></p>
                

              

               
            </div>
        </div>


  
     
    )
}

export default Register;

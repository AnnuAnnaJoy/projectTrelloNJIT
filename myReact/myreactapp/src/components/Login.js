import React,{useState} from 'react'
import Axios from 'axios';
import './Login.css';
import { Link }from 'react-router-dom'

 
const Login = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    
 const login = (e) => {
    
    Axios.post('http://localhost:3001/login',
    {
       name: name,
       password:password
     
    }).then((result)=>{
        localStorage.setItem('auth',JSON.stringify(result.data));
       props.history.push('/home');
    })
   .catch((err)=>{
       alert(err.response);
   
   })
 }

    return (
        <>

        <div className='signin'>
          
          <div className='box'>
          <h1>Sign-In</h1>
           {/* <form autocomplete="off"  onSubmit={login}>  */}
          <h5>Name</h5>
                <input type='text' name='name' value={name}  onChange={(e) =>{setName(e.target.value)}} />
              
             
                
                <h5>Password</h5>
                <input type='password' name='password'  value={password}   onChange={(e) =>{setPassword(e.target.value)}} />
              
         
                

                <button onClick={login} className='signInButton'>Login</button>
                
                <Link to="/register"><p>New User ?</p></Link>{/* </form> */}
            </div>
       </div>
       </>
    )
}
 
export default Login
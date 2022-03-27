import React from "react";
import { Route,Redirect } from 'react-router-dom'
 

const ProtectedRoute = ({component,...rest})=>{
  
let RenderComponent = component;
let hashToken = JSON.parse(localStorage.getItem('auth'));
return(
    <Route
    {...rest}
    render= {
        props=>{
          return hashToken !== null && hashToken !== '' ? (
                <RenderComponent {...props} />
            ) : (
                <Redirect 
                to = {{
                    pathname:'/login'
                }}
                />
            )
        }
    }
    />
);

}
export default ProtectedRoute;
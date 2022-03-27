import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <NavLink  to ='/crud' activeStyle = {{fontWeight : 'bold' , color : 'blue'}}>
                        <li>
                            
                            <div className = 'menu-text'>
                            Users
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ='/todo' activeStyle = {{fontWeight : 'bold' , color : 'blue'}}>
                        <li>
                           
                            <div className = 'menu-text'>
                                Card Management
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ='/list' activeStyle = {{fontWeight : 'bold' , color : 'blue'}}>
                        <li>
                           
                            <div className = 'menu-text'>
                                Task
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ='/crud' activeStyle = {{fontWeight : 'bold' , color : 'blue'}}>
                        <li>

                            <div className = 'menu-text'>
                                Workspace
                            </div>
                        </li>
                    </NavLink>


                    <NavLink to ='/login' activeStyle = {{fontWeight : 'bold' , color : 'blue'}}>
                        <li>

                            <div className = 'menu-text'>
                                Log out
                            </div>
                        </li>
                    </NavLink>
                   
                    
                   
                </ul>
            </nav>
      
       
        </>
    )
}

export default Navbar
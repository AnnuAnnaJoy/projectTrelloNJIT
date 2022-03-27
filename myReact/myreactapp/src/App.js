import React from 'react'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import ProtectedRoute from './components/Protected';
import Todo from './components/Todo'
import Crud from './components/crud/Crud';
import AddUser from './components/crud/AddUser';
import EditUser from './components/crud/Edit'
import List from './List';

import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';





function App(){
 
    return(
     <>
     <Router>
     <Switch>
         <Route exact path="/" component={Login} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/register" component={Register} /> 
         <Route exact path="/crud" component={Crud} />
         <Route exact path="/adduser" component={AddUser} /> 
         <Route exact path="/edit/:id" component={EditUser} /> 
         <Route exact path="/todo" component={Todo} /> 
         <Route exact path="/list" component={List} /> 
        
     
    
        
         
         <ProtectedRoute path="/home" component={Home} />
     </Switch>
     </Router>
    </>
    );
}
export default App;




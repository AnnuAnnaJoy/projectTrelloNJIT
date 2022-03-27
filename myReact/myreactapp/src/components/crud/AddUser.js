import React,{useState} from 'react'
// import Navbar from '../Navbar'
import axios from 'axios';
import Header from '../Header'
function AddUser(props) {

    const [name, setName] = useState("");
    const [regno, setRegno] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

  
  
  const addEmp = () => {
      
     axios.post('http://localhost:3001/create',{
       name:name,
       regno:regno,
       email:email,
       course:course
     }).then((result)=>{
      alert(result.data);        
      props.history.push('/crud');
     })
  }


  return (
      <>
      <Header />
      {/* <Navbar/> */}
      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD User</h2>
        <form onSubmit={addEmp}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-5"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) =>{setName(e.target.value)}}
             
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-5"
              placeholder="Enter Your RegNo"
              name="regno"
              value={regno}
              onChange={(e) =>{setRegno(e.target.value)}}
              
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-5"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) =>{setEmail(e.target.value)}}
             
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Course"
              name="course"
              value={course}
              onChange={(e) =>{setCourse(e.target.value)}}
             
            />
          </div>
       
      
        
          <button  className="btn btn-warning btn-block">Add User</button>
        </form>
      </div>
    </div>
        
      </>

  )
}

export default AddUser
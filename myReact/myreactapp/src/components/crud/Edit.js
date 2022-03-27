import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    regno: "",
    email: "",
    course: ""
  });

   const { name, regno, email, course } = user;
   const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
   };

   useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/update/${id}`, user);
    history.push("/crud");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/edit/${id}`);
    setUser(result.data);
    console.log(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)} autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-4"
              name="name"
              value={name}
              
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-4"
           
              name="regno"
              value={regno}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-4"
             
              name="email"
              value={email}
              
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-4"
           
              name="course"
              value={course}
              
            />
          </div>
        
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

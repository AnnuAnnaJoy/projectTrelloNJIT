import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Navbar from '../Navbar';
import Header from "../Header";

const Users = () => {
    const [users, setUser] = useState([]);


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/read");
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/delete/${id}`);
        loadUsers();
    };

    return (
        <>
            <Header />
            {/* <Navbar /> */}


            <div className="container">
                <div className="py-4">

                    <Link to={'/adduser'} className='btn btn-primary mb-4 ' >Add Workspace</Link>

                    <table class="table border shadow ">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Reg No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Course</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.regno}</td>
                                <td>{user.email}</td>
                                <td>{user.course}</td>
                                <td>

                                    <Link  className="btn btn-primary mr-2"
                                           to={`/edit/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className="btn btn-danger" onClick={() => deleteUser(user.id)}  >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Users;

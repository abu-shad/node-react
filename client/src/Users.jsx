import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]) 

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(result => {console.log(result)
         window.location.reload()})
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Link to="/create" className="btn btn-success"> Add +</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user , index) => (
                            <tr key={index}>
                                <th scope="row">1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td><Link to={`/update/${user._id}`} className="btn btn-primary me-2">Edit</Link>
                                <button type="button" onClick={(e) => handleDelete(user._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </table>
        </div>
    )
}

export default Users;
import React, { useState } from "react";
import axios from 'axios'
import {useNavigate}  from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="text-center">Add user</h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={submit}>
                            <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="age" 
                                placeholder="Enter your age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default CreateUser;
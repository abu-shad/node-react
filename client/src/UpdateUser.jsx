import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    },[])

    const update = (e) => {
        e.preventDefault()
        console.log({name, email, age});
        axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
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
                        <h3 className="text-center">Update user</h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={update}>
                            <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="Enter your name"
                                defaultValue={name}
                                onChange={e => setName(e.target.value)}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter your email"
                                defaultValue={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="age" 
                                placeholder="Enter your age"
                                defaultValue={age}
                                onChange={e => setAge(e.target.value)}
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

export default UpdateUser;
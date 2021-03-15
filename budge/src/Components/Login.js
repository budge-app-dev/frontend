import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const initLoginVal = {
    username: '',
    password: ''
}

export default function Login() {
    const [loginVal, setLoginVal]=useState(initLoginVal);
    const history = useHistory();

    const handleChanges = e =>{
        setLoginVal({
            ...loginVal, [e.target.name]:e.target.value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/login', loginVal)
        // axios.post("https://reqres.in/api/users", newUser)
        .then((resp)=>{
            console.log(resp)
            setLoginVal(initLoginVal)
        })
        .catch((err)=>{
            console.log(err)
        })
        history.push('/')

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label> Username:
                    <input
                    type="text"
                    name="username"
                    value={loginVal.username}
                    onChange={handleChanges}>
                    </input>
                </label>
                <label> Password:
                    <input 
                    type="password"
                    name="password"
                    value={loginVal.password}
                    onChange={handleChanges}>
                    </input>
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

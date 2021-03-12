import React, {useState} from 'react'

const initLoginVal = {
    username: '',
    password: ''
}

export default function Login() {
    const [loginVal, setLoginVal]=useState(initLoginVal);

    const handleChanges = e =>{
        setLoginVal({
            ...loginVal, [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label> Username:
                    <input
                    type="text"
                    name="username"
                    value={loginVal.username}
                    onChange={handleChanges}>
                    </input>
                </label>
            </form>
        </div>
    )
}

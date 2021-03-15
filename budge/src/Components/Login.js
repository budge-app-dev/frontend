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
        <Page>
            <Container>
                <h1>BUDGE</h1>
                <FormContainer className="formContainer">
                    <h3>Log In</h3>
                    <form onSubmit={handleLogin}>
                        <label>
                            <input
                            type="text"
                            name="username"
                            value={loginVal.username}
                            onChange={handleChanges}
                            placeholder="Username">
                            </input>
                        </label>
                        <label>
                            <input 
                            type="password"
                            name="password"
                            value={loginVal.password}
                            onChange={handleChanges}
                            placeholder="Password">
                            </input>
                        </label>
                        <div className="btn">
                        <Button>Login</Button>
                        </div>
                    </form>
                </FormContainer>
            </Container>
        </Page>
    )
}

const Page= styled.div`
display: flex;
justify-content:center;
height:100vh;
align-items: center;
`

const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
border-radius: 10px;

display: flex;
justify-content: center;
flex-wrap: wrap;
position: absolute;
width: 30%;
    h1{
        width:100%;
        background: #FFFFFF;
        font-size: 1.4rem;
        padding: 3%;
        margin: 1% auto;
        color: #604AE4;
    }
    h3{
        width:100%;
        background: #FFFFFF;
        color: #535358;
        line-height: 24px;
        margin: 3% auto;
    }
    
    form{
        display:flex;
        flex-direction: column;
        width: 100%;
        background: #FFFFFF;
        margin:1% auto;
    }
    label{
        background: #FFFFFF;
    }
    input{
        width: 74%;
        margin:2%;
        padding: 1%;
        background: #F7F7F7;
        color: #000000; 
        border: none;
    }
    .btn{
        display: flex;
        justify-content: center;
        margin: 1%;
        padding: 1%;
        background: #FFFFFF;
    }
    
`
const FormContainer= styled.div`

        background: #FFFFFF;
        width: 100%;
        margin-bottom: 4%;
`

const Button= styled.button`
    background: #1387F2;
    color: #FFFFFF;
    border-radius: 3px;
    width: 80%;
    border: none;
    padding: 1%;
    `
    
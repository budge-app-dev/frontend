import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios' 
import styled from 'styled-components'

const initRegValue={
    username:'',
    email:'',
    password:'',
}
export default function Register() {
    const [regValue, setRegValue] = useState(initRegValue)
    const history = useHistory();
    
    const handleChange=(e)=>{
        setRegValue({...regValue, [e.target.name]:e.target.value})

    }

    const onSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/register_user', regValue)
        .then((resp)=>{
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        history.push('/login')
    }

    return (
        <Page>
            <Container>
            <h1>BUDGE</h1>
            <FormContainer className="formContainer">
                <h3>Sign-Up</h3>
                <form onSubmit={onSubmit}>
                    <label>  
                        <input
                        type="text"
                        name="username"
                        value={regValue.username}
                        onChange={handleChange}
                        placeholder="Username"
                        >
                        </input>
                    </label>
                    <label>  
                        <input
                        type="email"
                        name="email"
                        value={regValue.email}
                        onChange={handleChange}
                        placeholder="Email"
                        >
                        </input>
                    </label>
                    <label>
                        <input
                        type="password"
                        name="password"
                        value={regValue.password}
                        onChange={handleChange}
                        placeholder="Password"
                        >
                        </input></label>
                    <div className="btn">
                        <Button>Sign up</Button>
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
    }
    h3{
        width:100%;
        background: #FFFFFF;
        color: #535358;
        line-height: 24px;
        margin-top: -1%;
    }
    
    form{
        display:flex;
        flex-direction: column;
        width: 100%;
        background: #FFFFFF;
    }
    label{
        background: #FFFFFF;
    }
    input{
        width: 74%;
        margin:1%;
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
    
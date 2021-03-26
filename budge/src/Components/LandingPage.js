import React from 'react'
import MoneyTree from '../images/MoneyTree2.png'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


export default function LandingPage() {
    const history=useHistory();

    return (
        <div>
           {/* <img src={MoneyTree} id="bgImg" alt="Money Tree" /> */}
            <Nav className="navBar">
                <h1>Budge.</h1>
            </Nav>
            <ImgContent/>
            <H1> BUDGE </H1>
            <H2> A better way to budget.</H2>
                <Button1 onClick={()=>{history.push('/login')}}>LOG IN</Button1>
                <Button2 onClick={()=>{history.push('/register')}}>SIGN UP</Button2>
        </div>
    )
}
const ImgContent= styled.img`
  
  background-image: url(${MoneyTree});
  width: 100%;
  height: 100vh;
  position: relative;
`
const Nav= styled.div`
background: #1387F2;
padding:.5%;
position: absolute;
z-index: 1000;
left: 0px;
right: 0px;

    h1{
        background: #1387F2;
        display:flex;
        justify-content: flex-start;
        font-size: 1.8rem;
        margin-left: 1.5%;
        color: white;
    }
`

const H1=styled.h1`
    float: left;
    position: absolute;
    left: 880px;
    top: 50px;
    z-index: 1000;
    color: #FFFFFF;
    background: none;
    font-size: 8rem;
    
`
const H2=styled.h1`
    float: left;
    position: absolute;
    left: 935px;
    top: 250px;
    z-index: 1000;
    color: #FFFFFF;
    background: none;
    font-size: 1.9rem;
    
`
// const ButtonBox = styled.div`
//     position: absolute;
//     z-index: 1000;
//     left: 100px;
//     right: 100px;
// `

const Button1 = styled.button`
position: absolute;
    z-index: 1000;
    left: 890px;
    top: 330px;
    background: #F7F7F7;
    border: none;
    color: #5D534C;
    width: 28%;
    padding: .75% 0%;
`
const Button2 = styled.button`
position: absolute;
    z-index: 1000;
    left: 890px;
    top: 400px;
    background: #1387F2;
    border: none;
    color: #FFFFFF;
    width: 28%;
    padding: .75% 0%;    
`

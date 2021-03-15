import React from 'react'
import MoneyTree from '../images/MoneyTree.png'
import styled from 'styled-components'

export default function LandingPage() {
    return (
        <div>
           {/* <img src={MoneyTree} id="bgImg" alt="Money Tree" /> */}
            <ImgContent/>
            <H1> BUDGE </H1>
            <H2> A better way to budget.</H2>
        </div>
    )
}
const ImgContent= styled.img`
  
  background-image: url(${MoneyTree});
  width: 2000px;
  height: 100vh;
  position: relative;
`

const H1=styled.h1`
    float: left;
    position: absolute;
    left: 880px;
    top: 110px;
    z-index: 1000;
    color: #FFFFFF;
    background: none;
    font-size: 8rem;
    
`
const H2=styled.h1`
    float: left;
    position: absolute;
    left: 935px;
    top: 245px;
    z-index: 1000;
    color: #FFFFFF;
    background: none;
    font-size: 2rem;
    
`
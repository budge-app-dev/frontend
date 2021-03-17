import React from 'react';
import styled from 'styled-components';
import testImage from '../../images/testImage.jpg';
import BudgeLogo from '../../images/budgeappBlue.svg';

const Container = styled.div`
  div.navBar {
    display: flex;
    height: 10vh;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    /* z-index: 2000;
    position: absolute; */
  }

  img.profile {
    width: 3.5%;
    height: 58%;
    border-radius: 50%;
    margin-left: 80%;
    margin-top: 0.7%;
    border: 3px solid #2a7de1;
  }

  img.logo {
    margin-left: 2%;
  }

  div.leftSideView {
    background-color: #fafbfc;
    width: 16%;
    height: 90vh;
  }

  h2 {
    color: #2a7de1;
    font-size: 1.1rem;
    margin-top: 0.5%;
    padding-top: 12%;
  }
`;

function NavBar() {
  return (
    <Container>
      <div class='navBar'>
        <img class='logo' src={BudgeLogo} alt=''></img>
        <img class='profile' src={testImage} alt=''></img>
      </div>
      <div class='leftSideView'>
        <h2>Welcome Bob</h2>
      </div>
    </Container>
  );
}

export default NavBar;

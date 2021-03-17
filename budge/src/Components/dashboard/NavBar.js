import React from 'react';
import styled from 'styled-components';
import testImage from '../../images/testImage.jpg';
import BudgeLogo from '../../images/budgeappBlue.svg';

const Container = styled.div`
  div {
    display: flex;
    height: 10vh;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
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
    margin-left: 1%;
  }
`;

function NavBar() {
  return (
    <Container>
      <div>
        <img class='logo' src={BudgeLogo} alt=''></img>
        <img class='profile' src={testImage} alt=''></img>
      </div>
    </Container>
  );
}

export default NavBar;

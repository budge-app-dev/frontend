import React from 'react';
import { Container } from './styles/navBar';
import testImage from '../../images/testImage.jpg';
import BudgeLogo from '../../images/budgeappBlue.svg';

function NavBar() {
  return (
    <Container>
      <div class='navBar'>
        <img class='logo' src={BudgeLogo} alt=''></img>
        <img class='profile' src={testImage} alt=''></img>
      </div>
    </Container>
  );
}

export default NavBar;

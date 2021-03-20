import styled from 'styled-components';

export const Container = styled.div`
  div.leftSideDiv {
    background-color: #fafbfc;
    width: 16%;
    height: 90vh;
  }

  h2.welcomeMessage {
    color: #2a7de1;
    font-size: 1rem;
    margin-top: 0.5%;
    padding-top: 12%;
  }

  section.leftSideSection {
    display: flex;
  }

  div.separator1 {
    display: flex;
    align-items: center;
    background-color: #2a7de1;
    /* height: 70%; */
    width: 60%;
    border-radius: 10px;
    color: #ffffff;
  }

  div.separator2 {
    display: flex;
    align-items: center;
    background-color: #d9eaff;
    /* height: 70%; */
    width: 60%;
    border-radius: 10px;
    color: #2a7de1;
  }

  div.separatorDiv {
    display: flex;
    font-size: 0.7rem;
    width: 30%;
    height: 5vh;
    margin-top: 5%;
    margin-left: 5%;
  }

  p.separatorText {
    margin-left: 7%;
  }

  div.mainSectionDiv {
    width: 40%;
    text-align: left;
    margin-left: 4.5%;
  }

  div.mainTopDiv {
    width: 100%;
  }

  h1.myBudge {
    font-size: 1.2rem;
    color: #2a7de1;
    margin-top: 0%;
  }

  h2.leftMoney {
    font-size: 0.6rem;
    color: #2a7de1;
  }

  section.mainSection {
    height: 70vh;
    margin-top: 3%;
  }

  div.barGraph {
    margin-top: 3%;
    margin-left: 4%;
  }

  a.logout {
    text-decoration: none;
    font-size: 0.6rem;
    color: #604ae4;
  }
  div.logoutDiv {
    margin-top: 300%;
  }
`;

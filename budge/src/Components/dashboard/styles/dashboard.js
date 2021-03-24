import styled from 'styled-components';

export const Container = styled.div`
  div.leftSideDiv {
    background-color: #fafbfc;
    width: 100%;
    height: 90vh;
  }

  h2.welcomeMessage {
    color: #2a7de1;
    font-size: 1.5rem;
    margin-top: 0.5%;
    padding-top: 12%;
  }

  section.leftSideSection {
    display: flex;
    width: 12%;
  }

  button.separator1 {
    display: flex;
    align-items: center;
    background-color: #2a7de1;
    width: 60%;
    border-radius: 10px;
    color: #ffffff;
    border: none;
  }

  button.separator2 {
    display: flex;
    align-items: center;
    background-color: #d9eaff;
    width: 60%;
    border-radius: 10px;
    color: #2a7de1;
    border: none;
  }

  div.separatorDiv {
    display: flex;
    font-size: 0.7rem;
    width: 30%;
    height: 5vh;
    margin-top: 5%;
    margin-left: 4.5%;
  }

  p.separatorText {
    margin-left: 7%;
    font-size: 1rem;
  }

  a.logout {
    text-decoration: none;
    font-size: 1.2rem;
    color: #604ae4;
  }
  div.logoutDiv {
    margin-top: 370%;
  }

  div.mainTopDiv {
    width: 100%;
  }

  div.mainDiv {
    display: flex;
  }

  div.bottomMainDiv {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  div.leftSideDiv {
    background-color: #fafbfc;
    width: 16%;
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
  }

  button.separator1 {
    display: flex;
    align-items: center;
    background-color: #2a7de1;
    /* height: 70%; */
    width: 60%;
    border-radius: 10px;
    color: #ffffff;
    border: none;
  }

  button.separator2 {
    display: flex;
    align-items: center;
    background-color: #d9eaff;
    /* height: 70%; */
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
    font-size: 2rem;
    color: #2a7de1;
    margin-top: 0%;
  }

  h2.leftMoney {
    font-size: 1rem;
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
    font-size: 1.2rem;
    color: #604ae4;
  }
  div.logoutDiv {
    margin-top: 300%;
  }

  section.dailySpendSection {
    width: 90%;
    text-align: left;
    margin-left: 5%;
  }

  h1.dailySpend {
    font-size: 2rem;
    color: #2a7de1;
  }

  div.dailySpendTopDiv {
    display: flex;
  }

  button.saveDailySpend {
    width: 12%;
    height: 2vh;
    border-radius: 12px;
    border: none;
    background-color: #2a7de1;
    color: #ffffff;
    margin-top: 2%;
    margin-left: 70%;
  }

  div.welcomeSpend {
    display: flex;
  }

  h2.whatDidYouSpend {
    color: #2a7de1;
  }

  h3.date {
    display: flex;
    align-items: center;
    margin-left: 0.6%;
    color: #604ae4;
  }

  p.leftoverBalance {
    color: #604ae4;
  }

  input.leftoverBalanceInput {
    background-color: #f4f6f7;
    border: none;
    height: 2vh;
    width: 15%;
  }

  div.moneyLeftDiv {
    height: 2.8vh;
    width: 40%;
    background-color: #f4f6f7;
  }

  p.categories {
    color: #604ae4;
    font-size: 1.5rem;
    width: 80%;
    text-align: left;
  }

  p.remainingBalance {
    color: #2a7de1;
    margin-top: 0%;
    height: 2vh;
  }

  div.categoriesDiv {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  input.amountInput {
    height: 2.5vh;
    background-color: #f7f7f7;
    border: none;
    width: 60%;
  }

  div.categoriesMainDiv {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 20%;
  }
  section.catSec {
    display: flex;
    flex-direction: row;
    height: 50vh;
    width: 100%;
    flex-wrap: wrap;
  }
`;

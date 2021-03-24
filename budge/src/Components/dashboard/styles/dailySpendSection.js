import styled from 'styled-components';

export const Container = styled.div`
  section.dailySpendSection {
    width: 90%;
    text-align: left;
    margin-left: 5%;
  }

  div.dailySpendTopDiv {
    display: flex;
    margin-top: 2%;
  }
  h1.dailySpend {
    font-size: 2rem;
    color: #2a7de1;
  }

  button.saveDailySpend {
    width: 12%;
    height: 2.5vh;
    border-radius: 15px;
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

  div.leftoverBalanceDiv {
    background-color: #f4f6f7;
    border: none;
    height: 2vh;
    width: 15%;
  }
  section.catSec {
    display: flex;
    flex-direction: row;
    height: 35vh;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 3%;
  }
  div.categoriesMainDiv {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 20%;
    height: 40%;
  }
  div.categoriesDiv {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 66%;
  }
  p.categories {
    color: #604ae4;
    font-size: 1.5rem;
    width: 80%;
    text-align: left;
  }
  input.amountInput {
    height: 2.5vh;
    background-color: #f7f7f7;
    border: none;
    width: 60%;
  }

  p.remainingBalance {
    color: #2a7de1;
    margin-top: 4%;
    height: 2vh;
  }
`;

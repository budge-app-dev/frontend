import React, { useState } from 'react';
import NavBar from './navBar';
import BudgeSection from './budgeSection';
import { Container } from './styles/dashboard';
import DailySpendSection from './DailySpendSection';

function Dashboard() {
  const [dailySpend, setDailySpend] = useState(false);

  const handleDailySpend = () => {
    setDailySpend(true);
  };

  const handleBudge = () => {
    setDailySpend(false);
  };
  return (
    <Container>
      <NavBar />
      <div class='mainDiv'>
        <section class='leftSideSection'>
          <div class='leftSideDiv'>
            <h2 class='welcomeMessage'>Welcome Bob</h2>
            <div class='logoutDiv'>
              <a href='www.facebook.com' alt='' class='logout'>
                Log Out
              </a>
            </div>
          </div>
        </section>

        <div class='bottomMainDiv'>
          <div class='mainTopDiv'>
            <div class='separatorDiv'>
              <button
                class='separator1'
                onClick={handleBudge}
                style={{
                  backgroundColor: dailySpend ? '#d9eaff' : '#2a7de1',
                  color: dailySpend ? '#2a7de1' : '#d9eaff',
                }}
              >
                <p class='separatorText'>Budge</p>
              </button>
              <button
                class='separator2'
                onClick={handleDailySpend}
                style={{
                  backgroundColor: dailySpend ? '#2a7de1' : '#d9eaff',
                  color: dailySpend ? '#d9eaff' : '#2a7de1',
                }}
              >
                <p class='separatorText'>Daily Spend</p>
              </button>
            </div>
          </div>
          {dailySpend ? <DailySpendSection /> : <BudgeSection />}
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;

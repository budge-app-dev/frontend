import React from 'react';
import { Container } from './styles/budgeSection';
import { Bar } from 'react-chartjs-2';

function budgeSection() {
  return (
    <Container>
      <section class='leftSideSection'>
        <div class='leftSideDiv'>
          <h2 class='welcomeMessage'>Welcome Bob</h2>
          <div class='logoutDiv'>
            <a href='www.facebook.com' alt='' class='logout'>
              Log Out
            </a>
          </div>
        </div>

        <div class='mainTopDiv'>
          <div class='separatorDiv'>
            <div class='separator1'>
              <p class='separatorText'>Budge</p>
            </div>
            <div class='separator2'>
              <p class='separatorText'>Daily Spend</p>
            </div>
          </div>

          <section class='mainSection'>
            <div class='mainSectionDiv'>
              <h1 class='myBudge'>My Budge</h1>
              <h2 class='leftMoney'>Money I have left this month</h2>
              <input placeholder='$--'></input>
            </div>
            {/* Bar graph */}
            <div class='barGraph'>
              <Bar
                data={{
                  labels: ['Groceries', 'Rent', 'Car', 'Phone'],
                  datasets: [
                    {
                      label: 'Budget',
                      data: [100, 150, 200, 100],
                      backgroundColor: [
                        '#2a7de1',
                        '#2a7de1',
                        '#2a7de1',
                        '#2a7de1',
                      ],
                      borderColor: ['#2a7de1', '#2a7de1', '#2a7de1', '#2a7de1'],
                      borderWidth: 1,
                    },
                    {
                      label: 'Daily Spend',
                      data: [90, 88, 67, 40],
                      backgroundColor: '#604AE4',
                      borderColor: '#604AE4',
                    },
                  ],
                }}
                height={25}
                width={80}
                option={{
                  maintainAspectRation: false,
                }}
              />
            </div>
          </section>
        </div>
      </section>
    </Container>
  );
}

export default budgeSection;

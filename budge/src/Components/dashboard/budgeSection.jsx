import React from 'react';
import { Container } from './styles/budgeSection';
import { Bar } from 'react-chartjs-2';

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let day = newDate.getDay();

function dateChanger(day) {
  if (day === 1) {
    return 'Monday';
  } else if (day === 2) {
    return 'Tuesday';
  } else if (day === 3) {
    return 'Wednesday';
  } else if (day === 4) {
    return 'Thursday';
  } else if (day === 5) {
    return 'Friday';
  } else if (day === 6) {
    return 'Saturday';
  } else if (day === 7) {
    return 'Sunday';
  }
  return dateChanger();
}

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
          {/* closes div.logout */}
        </div>
        {/* closes div.leftSideDiv */}

        <div class='mainTopDiv'>
          <div class='separatorDiv'>
            <div class='separator1'>
              <p class='separatorText'>Budge</p>
            </div>
            {/* closes div.separator1 */}
            <div class='separator2'>
              <p class='separatorText'>Daily Spend</p>
            </div>{' '}
            {/* closes div.separator2 */}
          </div>{' '}
          {/* closes div.separatorDiv */}
          {/* <section>
           <h1>My Daily Spend</h1>
           <h2>Hi Bob, what did you spend today?</h2>
           <h3>
             {dateChanger(day)} ,{month}, {date}, {year}
           </h3>
         </section> */}
          <section class='mainSection'>
            <div class='mainSectionDiv'>
              <h1 class='myBudge'>My Budge</h1>
              <h2 class='leftMoney'>Money I have left this month</h2>
              <input placeholder='$--'></input>
            </div>
            {/* closes div.mainSectionDiv */}
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
            {/* closes div.barGraph */}
          </section>
          {/* closes section.mainSection*/}
        </div>
      </section>
    </Container>
  );
}

export default budgeSection;

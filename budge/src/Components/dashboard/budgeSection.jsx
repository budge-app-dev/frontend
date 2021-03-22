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

function monthChanger(month) {
  if (month === 1) {
    return 'Jan';
  } else if (month === 2) {
    return 'Feb';
  } else if (month === 3) {
    return 'March';
  } else if (month === 4) {
    return 'April';
  } else if (month === 5) {
    return 'May';
  } else if (month === 6) {
    return 'June';
  } else if (month === 7) {
    return 'July';
  } else if (month === 8) {
    return 'Aug';
  } else if (month === 9) {
    return 'Sept';
  } else if (month === 10) {
    return 'Oct';
  } else if (month === 11) {
    return 'Nov';
  } else if (month === 12) {
    return 'Dec';
  }
  return monthChanger();
}

const dummyCategories = [
  {
    category_id: 1,
    category: 'Groceries',
    totalBudget: 100,
  },
  {
    category_id: 2,
    category: 'Going out',
    totalBudget: 100,
  },
  {
    category_id: 3,
    category: 'Rent',
    totalBudget: 100,
  },
  {
    category_id: 4,
    category: 'Car',
    totalBudget: 100,
  },
  {
    category_id: 5,
    category: 'Food',
    totalBudget: 100,
  },
  {
    category_id: 6,
    category: 'investments',
    totalBudget: 100,
  },
  {
    category_id: 7,
    category: 'savings',
    totalBudget: 100,
  },
  {
    category_id: 8,
    category: 'cleaning',
    totalBudget: 100,
  },
];

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
          <section class='dailySpendSection'>
            <div class='dailySpendTopDiv'>
              <h1 class='dailySpend'>My Daily Spend</h1>
              <button class='saveDailySpend'>Save Changes</button>
            </div>
            {/* closes div.dailySpendTopDiv */}

            <div class='welcomeSpend'>
              <h2 class='whatDidYouSpend'>Hi Bob, what did you spend today?</h2>
              <h3 class='date'>
                {dateChanger(day)}, {monthChanger(month)} {date}, {year}
              </h3>
            </div>
            {/* closes div.welcomeSpend */}

            <p class='leftoverBalance'>Leftover Monthly Balance</p>
            <input class='leftoverBalanceInput' placeholder='$--' />

            {dummyCategories.map((category) => (
              <div key={category.category_id} class='categoriesMainDiv'>
                <div class='categoriesDiv'>
                  <p class='categories'>{category.category}</p>
                  <input placeholder='Enter amount...' class='amountInput' />
                </div>

                <p class='remainingBalance'>
                  Remaining balance: {category.totalBudget}
                </p>
              </div>
            ))}
          </section>
          {/* <section class='mainSection'>
            <div class='mainSectionDiv'>
              <h1 class='myBudge'>My Budge</h1>
              <h2 class='leftMoney'>Money I have left this month</h2>
              <input placeholder='$--'></input>
            </div>
            {/* closes div.mainSectionDiv */}
          {/* Bar graph */}
          {/* <div class='barGraph'>
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
          {/* </section> */}
          {/* closes section.mainSection*/}
        </div>
      </section>
    </Container>
  );
}

export default budgeSection;

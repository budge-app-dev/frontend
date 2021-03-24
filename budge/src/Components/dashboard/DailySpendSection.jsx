import React from 'react';
import { Container } from './styles/dailySpendSection';

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth();
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

function DailySpendSection() {
  return (
    <Container>
      <section class='dailySpendSection'>
        <div class='dailySpendTopDiv'>
          <h1 class='dailySpend'>My Daily Spend</h1>
          <button class='saveDailySpend'>Save Changes</button>
        </div>

        <div class='welcomeSpend'>
          <h2 class='whatDidYouSpend'>Hi Bob, what did you spend today?</h2>
          <h3 class='date'>
            {dateChanger(day)}, {monthChanger(month)} {date}, {year}
          </h3>
        </div>

        <p class='leftoverBalance'>Leftover Monthly Balance</p>
        <div class='leftoverBalanceDiv'>
          <p>$--</p>
        </div>

        <section class='catSec'>
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
      </section>
    </Container>
  );
}

export default DailySpendSection;

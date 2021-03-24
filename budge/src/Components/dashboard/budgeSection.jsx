import React from 'react';
import { Container } from './styles/budgeSection';
import { Bar } from 'react-chartjs-2';

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

function BudgeSection() {
  return (
    <Container>
      <section class='mainSection'>
        <div class='mainSectionDiv'>
          <h1 class='myBudge'>My Budge</h1>
          <h2 class='leftMoney'>Money I have left this month</h2>
          <div class='moneyLeftDiv'>
            <p class='moneyLeftP'>$--</p>
          </div>
        </div>

        <div class='barGraph'>
          <Bar
            data={{
              labels: ['Groceries', 'Rent', 'Car', 'Phone'],
              datasets: [
                {
                  label: 'Budget',
                  data: [100, 150, 200, 100],
                  backgroundColor: ['#2a7de1', '#2a7de1', '#2a7de1', '#2a7de1'],
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
    </Container>
  );
}
export default BudgeSection;

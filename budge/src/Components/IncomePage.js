import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'


const initIncomeValues= {
    time:"",
    income: "",
}



export default function IncomePage() {
    const [incomeVal, setIncomeVal] = useState(initIncomeValues);
    const [monthlyBudge, setMonthlyBudge] = useState({total_monthly_budget:""})
    const history = useHistory();

const handleChange = (e) => {
    setIncomeVal({...incomeVal, [e.target.name]:e.target.value})

    //ACCOUNTING FOR A TOTAL MONTHLY BUDGET REGARDLESS OF INCOME TIME TYPE.

    //THIS IS NOT CALCULATING THE LAST # ENTERED FOR SOME REASON. :/
    if (incomeVal.time === "week"){
        console.log(incomeVal.income)
        const monthlyIncW = (incomeVal.income * 4)
        setMonthlyBudge(monthlyIncW);
    } else if(incomeVal.time === "year") {
        const monthlyIncY = (incomeVal.income / 12)
        setMonthlyBudge(monthlyIncY);
    } else if(incomeVal.time === "month") {
        setMonthlyBudge(incomeVal.income);
    }
}




const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/budget/:user_id/budget', monthlyBudge)
    .then((resp)=>{
        console.log("Successful Post", resp)
    })
    .catch((err)=>{
        console.log("Error:", err)
    })
    history.push('/setBudge')

}

    return (
        <div>
            <div className="container">
                <h1> Let's Get You Started </h1>
                <h2> Almost there, what is your income?</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    <select onChange={handleChange} value={incomeVal.time} name="time">
                        <option value="">- Select an option -</option>
                        <option value="year">Year</option>
                        <option value="month">Month</option>
                        <option value="week">Week</option>
                    </select>
                    </label>
                    <label>
                        <input type="text" name="income" value={incomeVal.income} onChange={handleChange}>
                        </input>
                    </label>
                    <button>Next</button>
                </form>

            </div>
        </div>
    )
}

import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'


const initIncomeValues= {
    time:"",
    income: "",
}



export default function IncomePage() {
    const [incomeVal, setIncomeVal] = useState(initIncomeValues);

    //come back and change id to "", plus add it to each if statement.
    const [monthlyBudge, setMonthlyBudge] = useState({user_id: 1,
    total_monthly_budget:""})
    const history = useHistory();
    const params = useParams();

// const handleChange = (e) => {
//     setIncomeVal({...incomeVal, [e.target.name]:e.target.value})

//     //ACCOUNTING FOR A TOTAL MONTHLY BUDGET REGARDLESS OF INCOME TIME TYPE.

//     //THIS IS NOT CALCULATING THE LAST # ENTERED FOR SOME REASON. :/
    // if (incomeVal.time === "week"){
    //     console.log(incomeVal.income)
    //     const monthlyIncW = (incomeVal.income * 4)
    //     setMonthlyBudge({total_monthly_budget: monthlyIncW});
    // } else if(incomeVal.time === "year") {
    //     const monthlyIncY = (incomeVal.income / 12)
    //     setMonthlyBudge({total_monthly_budget: monthlyIncY});
    // } else if(incomeVal.time === "month") {
    //     setMonthlyBudge({total_monthly_budget: incomeVal.income});
    // }
   
// }

// const doesTheMath = (e) =>{
//     setIncomeVal({...incomeVal, time:e.target.value})

//     if (incomeVal.time === "week"){
//         console.log(incomeVal.income)
//         const monthlyIncW = (incomeVal.income * 4)
//         setMonthlyBudge({total_monthly_budget: monthlyIncW});
//     } else if(incomeVal.time === "year") {
//         const monthlyIncY = (incomeVal.income / 12)
//         setMonthlyBudge({total_monthly_budget: monthlyIncY});
//     } else if(incomeVal.time === "month") {
//         setMonthlyBudge({total_monthly_budget: incomeVal.income});
//     }
// }

useEffect(()=>{
    if (incomeVal.time === "week"){
        console.log(incomeVal.income)
        const monthlyIncW = (incomeVal.income * 4)
        setMonthlyBudge({total_monthly_budget: monthlyIncW});
    } else if(incomeVal.time === "year") {
        const monthlyIncY = (incomeVal.income / 12)
        setMonthlyBudge({total_monthly_budget: monthlyIncY});
    } else if(incomeVal.time === "month") {
        setMonthlyBudge({total_monthly_budget: incomeVal.income});
    }
},[incomeVal])



const handleSubmit = (e) => {
    e.preventDefault();

    console.log("MonthlyBudge", monthlyBudge)
    axios.post(`http://localhost:5000/api/budget/${params.id}/budget`, monthlyBudge)
    .then((resp)=>{
        console.log("Successful Post", resp)
    })
    .catch((err)=>{
        console.log("Error:", err)
    })
    // history.push('/setBudge')

}

console.log("Time", incomeVal.time)
console.log("Value", incomeVal.value)
    return (
        <div>
            <div className="container">
                <h1> Let's Get You Started </h1>
                <h2> Almost there, what is your income?</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    <select onChange={(e)=>{
                        setIncomeVal({...incomeVal, time: e.target.value})  
                    }} value={incomeVal.time} name="time">
                        <option value="">- Select an option -</option>
                        <option value="year">Year</option>
                        <option value="month">Month</option>
                        <option value="week">Week</option>
                    </select>
                    </label>
                    <label>
                        <input type="text" name="income" value={incomeVal.income} onChange={(e)=>{
                             setIncomeVal({...incomeVal, income: e.target.value})
                        }}>
                        </input>
                    </label>
                    <button>Next</button>
                </form>

            </div>
        </div>
    )
}

import React, {useState} from 'react'
import axios from 'axios'
import SetBudgeCategory from './SetBudgeCategory'

const userCategories=[ "rent", "groceries", "savings"
]
export default function SetBudge() {
    const [monthlyBudge, setMonthlyBudge] = useState( 2000)
    const [categories, setCategories]=useState(userCategories)



    const fetchMonthlyBudge = () =>{
        axios.get('http://localhost:5000/api/budget/:user_id/budget')
        .then((resp)=>{
            //NEED TO CHANGES RESP TO WHAT THE DATA PULLS IN. 
            setMonthlyBudge(resp)
        })
        .catch((err)=>{
            console.log("Error:", err)
        })
    }

    const handleBtnClick = () =>{

    }

console.log("CATEGORIES:", categories)
    return (
        <div>
            <div className="Container">
                <h1> Let's Get You Started </h1>
                <h2> One last thing... What is your budget? </h2>
                <div className="monthlyBudge">
                    {monthlyBudge.total_monthly_budget ? <h2>monthlyBudge.total_monthly_budget</h2> : <h6>Placeholder: {monthlyBudge}</h6> }
                </div>
                <h3> Set each category to the total amount you want to spend per month.</h3>
                {categories.map((category)=>{
                    return <SetBudgeCategory category={category} handleBtnClick={handleBtnClick} monthlyBudge={monthlyBudge} setMonthlyBudge={setMonthlyBudge}/>
                })} 
                <button onClick={handleBtnClick}> Save Budget</button>
            </div>
        </div>
    )
}

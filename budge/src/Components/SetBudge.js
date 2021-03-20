import React, {useState} from 'react'
import axios from 'axios'
import SetBudgeCategory from './SetBudgeCategory'

const userCategories=[ "rent", "groceries", "savings"
]
export default function SetBudge() {
    const [monthlyBudge, setMonthlyBudge] = useState({total_monthly_budget: null})
    const [categories, setCategories]=useState(userCategories)

    const fetchMonthlyBudge = () =>{
        axios.get('http://localhost:5000/api/budget/:user_id/budget')
        .then((resp)=>{
            console.log(resp)
        })
        .catch((err)=>{
            console.log("Error:", err)
        })
        
    }
console.log("CATEGORIES:", categories)
    return (
        <div>
            <div className="Container">
                <h1> Let's Get You Started </h1>
                <h2> One last thing... What is your budget? </h2>
                {categories.map((category)=>{
                    return <SetBudgeCategory category={category}/>
                })} 
                <button onClick={()=>{}}> Save Budget</button>
            </div>
        </div>
    )
}

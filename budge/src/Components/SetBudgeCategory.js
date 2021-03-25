import React, {useState} from 'react'


const initCategoryBudge= {
    budget: null,
}
export default function SetBudgeCategory(props) {
    const {category, monthlyBudge, handleBtnClick, setMonthlyBudge} = props

    const [categoryBudge, setBudgeCategory] = useState(initCategoryBudge);

    const handleChange = (e) => {
        setBudgeCategory({...categoryBudge, [e.target.name]:e.target.value})
        //The below doesn't work - need to subtract total input value for each category. 
        setMonthlyBudge(monthlyBudge-e.target.value)
        }
    
    return (
        <div>
            <h2>{category}</h2>
            <form>
                <input type='number' name="budget" value={categoryBudge.budget} onChange={handleChange} placeholder="0.00"></input>
            </form>
        </div>
    )
}

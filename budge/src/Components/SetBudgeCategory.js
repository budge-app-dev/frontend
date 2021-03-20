import React, {useState} from 'react'


const initCategoryBudge= {
    budget: null,
}
export default function SetBudgeCategory(props) {
    const {category} = props

    const [categoryBudge, setBudgeCategory] = useState(initCategoryBudge);

    const handleChange = (e) => {
        setBudgeCategory({...categoryBudge, [e.target.name]:e.target.value})
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

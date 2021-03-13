import { ADD_CAT } from '../actions'

export const initialState = { 
    categories: [], 
    addCat: [],
    totalBudget: 0, 
    income: 0,
    isLoading: false 
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}
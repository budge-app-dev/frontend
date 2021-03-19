import { GET_CAT_SUCCESS, GET_CAT_FAIL, ADD_CAT, INCREMENT, DECREMENT } from '../actions'

export const initialState = { 
    categories: [], 
    userCat: [],
    totalBudget: 0, 
    income: 0,
    error:'',
    progress: 0
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
        case(GET_CAT_SUCCESS):
        return({
            ...state, 
            categories: action.payload
        })
        case(GET_CAT_FAIL):
        return({
            ...state, 
            error: action.payload
        })
        case(ADD_CAT):
        return({
            ...state, 
            userCat: [...state.userCat, action.payload]
        })
        case(INCREMENT):
        return({
            ...state, 
            progress: state.progress + 1
        })
        case(DECREMENT):
        return({
            ...state, 
            progress: state.progress - 1
        })
        default:
            return state
    }
}
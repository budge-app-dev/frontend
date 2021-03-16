import axios from 'axios'; 

//REGISTER
//LOGIN 
//LOGOUT

//CATEGORIES
export const GET_CAT_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CAT_FAIL = "GET_CATEGORIES_FAIL";
export const ADD_CAT = "ADD_CATEGORY";

export const getCategories = () => (dispatch) => {
    axios
        .get("http://localhost:5000/api/categories")
        .then((res) => {
            dispatch({type:GET_CAT_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type:GET_CAT_FAIL, payload:`Error in getCategories, actions: ${err.message}`});
        });
}

export const addCategory = category => {
    return({type:ADD_CAT, payload: category});
}
export const ADD_CAT = "ADD_CATEGORY"; 

export const add_cat = category => {
    return({type:ADD_CAT, payload: category});
}
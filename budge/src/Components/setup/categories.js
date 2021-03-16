import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getCategories } from '../actions';
// if user's categories are empty, bring them to this page
// require user to have at least one category

// 1 - Housing -> Insurance -> Car -> Personal -> Education -> Finance
// render each section conditionally

function Categories({ categories, userCat, error, getCategories }) {
  useEffect(() => {
    getCategories();
}, []);
  return (
    <>
      <h1>Let's Start Right Where You Are</h1>
      <h2>What are your living expenses?</h2>
      <h3>Here are some common categories we thought of for you:</h3>
      <div className="categories-button">
        {categories.map(category => {
            return(
                <button>{category.category_name}</button>
            )
        })}
      </div>
    </>
  );
}

const mapStateToProps = state => {
    return {
        categories: state.categories, 
        userCat: state.userCat, 
        error: state.error
    }
}

export default connect(mapStateToProps, {getCategories})(Categories);

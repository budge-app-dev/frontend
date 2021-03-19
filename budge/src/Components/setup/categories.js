import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../actions";
import Progress from "./progress";
// if user's categories are empty, bring them to this page
// require user to have at least one category

function Categories({ categories, getCategories, progress }) {
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="categories-wrapper">
      {progress === 0 ? (
        <div className="categories progress-0">
          <h1>Let's get you started!</h1>
          <h2>What are your living expenses?</h2>
          <h3>We thought of the essentials for you:</h3>
          {categories.map((category) => {
            return (
              <>
                {category.category_id <= 7 ? (
                  <button key={category.category_id}>
                    {category.category_name}
                  </button>
                ) : null}
              </>
            );
          })}
        </div>
      ) : progress === 1 ? (
        <div className="categories progress-1">
          <h1>Personal</h1>
          <h2>Great start! Let's keep going... Self care is important.</h2>
          <h3>What will you make room for this month?</h3>
          {categories.map((category) => {
            return (
              <>
                {category.category_id >= 8 &&
                category.category_id <= 15 ? (
                  <button key={category.category_id}>
                    {category.category_name}
                  </button>
                ) : null}
              </>
            );
          })}
        </div>
      ) : progress === 2 ? (
        <div className="categories progress-2">
        <h1>Insurance</h1>
        <h2>You are stunning! All that pizzaz must require some maintenance</h2>
        <h3>Who is giving you that trusted care?</h3>
        {categories.map((category) => {
          return (
            <>
              {category.category_id >= 16 &&
              category.category_id <= 20 ? (
                <button key={category.category_id}>
                  {category.category_name}
                </button>
              ) : null}
            </>
          );
        })}
      </div>
      ) : progress === 3 ? (
        <div className="categories progress-3">
        <h1>Car</h1>
        <h2>You're going places</h2>
        <h3>What expenses does your car need?</h3>
        {categories.map((category) => {
          return (
            <>
              {category.category_id >= 21 &&
              category.category_id <= 25 ? (
                <button key={category.category_id}>
                  {category.category_name}
                </button>
              ) : null}
            </>
          );
        })}
      </div>
      ) : progress === 4 ? (
        <div className="categories progress-4">
        <h1>Education</h1>
        <h2>Back to the books</h2>
        <h3>The investment in yourself is already paying off</h3>
        {categories.map((category) => {
          return (
            <>
              {category.category_id >= 26&&
              category.category_id <= 27 ? (
                <button key={category.category_id}>
                  {category.category_name}
                </button>
              ) : null}
            </>
          );
        })}
      </div>
      ) : progress === 5 ? (
        <div className="categories progress-5">
        <h1>Other Finances</h1>
        <h2>Are you building up a savings? Portfolio?</h2>
        <h3>You're almost finished...</h3>
        {categories.map((category) => {
          return (
            <>
              {category.category_id >= 28&&
              category.category_id <= 30 ? (
                <button key={category.category_id}>
                  {category.category_name}
                </button>
              ) : null}
            </>
          );
        })}
      </div>
      ) : (
        <h1>Budge</h1>
      )}
      <Progress />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    userCat: state.userCat,
    error: state.error,
    progress: state.progress,
  };
};

export default connect(mapStateToProps, { getCategories })(Categories);

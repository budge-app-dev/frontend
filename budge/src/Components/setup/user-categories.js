import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories, addCategory } from "../actions";
import Progress from "./progress";

// BRYAN, Style here please :) 

const messages = [
  { h1: "Let's get you started!", h2: "What are your living expenses?", h3: "We thought of the essentials for you:" },
  { h1: "Personal", h2: "Great start! Let's keep going... Self care is important.", h3: "What will you make room for this month?" },
  { h1: "Insurance", h2: "You are stunning! All that pizzaz must require some maintenance", h3: "Who is giving you that trusted care?" },
  { h1: "Car", h2: "You're going places", h3: "What expenses does your car need?" },
  { h1: "Education", h2: "Back to the books", h3: "The investment in yourself is already paying off" },
  { h1: "Other Finances", h2: "Are you building up a savings? Portfolio?", h3: "You're almost finished..." },
];


function UserCategories({ categories, getCategories, progress, addCategory }) {
  useEffect(() => {
    getCategories();
  }, []);

  function Button({ category }) {
    const handleClick=() => {
      addCategory(category)
    }
    return <button onClick={handleClick} key={category.category_id}>{category.category_name}</button>;
  }

  return (
    <div className="categories-wrapper">
      <div className="categories categories-setup">
        <h1>{messages[progress].h1}</h1>
        <h2>{messages[progress].h2}</h2>
        <h3>{messages[progress].h3}</h3>
        {categories.map((category) => {
          return (
            <div className="categories category-buttons">
              {category.category_id <= 7 && progress === 0 ? (<Button category={category} />) :
              category.category_id >= 8 && category.category_id <= 15 && progress === 1 ? (<Button category={category} />) :
              category.category_id >= 16 && category.category_id <= 20 && progress === 2 ? (<Button category={category} />) :
              category.category_id >= 21 && category.category_id <= 25 && progress === 3 ? (<Button category={category} />) :
              category.category_id >= 26 && category.category_id <= 27 && progress === 4 ? (<Button category={category} />) :
              category.category_id >= 28 && category.category_id <= 30 && progress === 5 ? (<Button category={category} />) :
              null}
            </div>
          );
        })}
      </div>
      <Progress />
      <h1>BRYAN, STYLE HERE PLEASE. :)</h1>
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

export default connect(mapStateToProps, { getCategories, addCategory })(UserCategories);

import React from "react";
import { useNavigate } from 'react-router-dom'
import classes from "./RecipeCard.module.css";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  return (
    <div className={classes.recipe_card}>
      <div>
        <div className={classes.recipe_image_container}>
          <img src={recipe.image_url} alt='recipe' />
        </div>
      </div>
      <h2>{recipe.recipe_name}</h2>
   
    <button className={classes.blue_btn} onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;

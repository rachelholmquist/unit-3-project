import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import RecipeContainer from "./RecipeContainer";

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([]);
  
  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes} />
    </div>
  )
}

export default HomeScreen
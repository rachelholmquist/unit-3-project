import React, { useState } from "react";
import { Formik } from "formik";
import classes from "./NewRecipe.module.css";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}]);
    setName('');
    setQuantity('');
  };

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: '',
  };

  const onSubmit = (values) => {

    axios
    .post(`https://recipes.devmountain.com/recipes`, values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
}

const ingredientDisplay = ingredients.map((ingreds) => {
  return (
    <li>
      {ingreds.quantity} {ingreds.name}
    </li>
  )
})



  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.input_container}>
              <input
                placeholder="Title your Recipe"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                placeholder="Image URL goes here"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className={classes.radio_container}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className={classes.input_container}>
              <input
                placeholder="prep time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                placeholder="cook time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                placeholder="serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <h1>Ingredients</h1>
            <div className={classes.input_container}>
              <div className={classes.ingredient_input}>
                <input
                  placeholder="ingredient"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  placeholder="quantity"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >Add Another</button>
            <textarea
              placeholder="Type your instructions"
              rows={4}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button type="submit" className="blue-btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

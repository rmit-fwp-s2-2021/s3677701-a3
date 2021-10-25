import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getMeals, Meals, setPlan } from "../data/repository";
import MealCard from "./MealCard";

export default function MealPlan(props) {
  const location = useLocation();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fields = location.state.fields;
    const all_meals = getMeals(fields.diet_type, fields.meals, fields.calories);
    setMeals(all_meals);
    setPlan(all_meals)
  }, []);

  const getTotalCalories = (meals) => {
      let calorie_count = 0;
      for(const meal of meals){
          calorie_count += (meal.calories * meal.quantity);
      }
      return calorie_count;
  }

  const renderMeals = () => {
    const render_values = []

    const breakfast_meals = meals.filter((m) => m.type === "Breakfast");
    let breakfast_calorie_count = getTotalCalories(breakfast_meals);
    
    if (breakfast_meals.length > 0) {
      render_values.push(
        <div className="card">
          <h2>Breakfast</h2>
          <h4>{breakfast_calorie_count} Calories</h4>
          {breakfast_meals.map((x, index) => (
            <MealCard key={x.name + index} name={x.name} img={x.img} quantity={x.quantity} />
          ))}
        </div>
      );
    }

    const lunch_meals = meals.filter((m) => m.type === "Lunch");
    let lunch_calorie_count = getTotalCalories(lunch_meals);
    if (lunch_meals.length > 0) {
      render_values.push(
        <div className="card">
          <h2>Lunch</h2>
          <h4>{lunch_calorie_count} Calories</h4>
          {lunch_meals.map((x, index) => (
            <MealCard key={x.name + index} name={x.name} img={x.img} quantity={x.quantity} />
          ))}
        </div>
      );
    }

    const dinner_meals = meals.filter((m) => m.type === "Dinner");
    let dinner_calorie_count = getTotalCalories(dinner_meals);
    if (dinner_meals.length > 0) {
      render_values.push(
        <div className="card">
          <h2>Dinner</h2>
          <h4>{dinner_calorie_count} Calories</h4>
          {dinner_meals.map((x, index) => (
            <MealCard key={x.name + index} name={x.name} img={x.img} quantity={x.quantity} />
          ))}
        </div>
      );
    }

    const snack_meals = meals.filter((m) => m.type === "Snack");
    let snack_calorie_count = getTotalCalories(snack_meals);
    if (snack_meals.length > 0) {
      render_values.push(
        <div className="card">
          <h2>Snack</h2>
          <h4>{snack_calorie_count} Calories</h4>
          {snack_meals.map((x, index) => (
            <MealCard key={x.name + index} name={x.name} img={x.img} quantity={x.quantity} />
          ))}
        </div>
      );
    }


    return render_values;
  };

  return (
    <div className="meal-plans">
        <div className="text-center">
        <h1>Today's Meal plan</h1>
      <h3>
        <i className="fas fa-chart-pie"></i> {location.state.fields.calories}{" "}
        Calories
      </h3>
        </div>

      {renderMeals()}
    </div>
  );
}

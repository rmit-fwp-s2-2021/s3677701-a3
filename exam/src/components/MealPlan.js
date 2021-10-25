import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getMeals, Meals } from "../data/repository";

export default function MealPlan(props){

    const location = useLocation();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fields = location.state.fields;
        const all_meals = getMeals(fields.diet_type, fields.meals, fields.calories);
        console.log(all_meals);
        setMeals(all_meals);
    }, []);

    return(
        <div className="meal-plans">
            <h1>Today's Meal plan</h1>
        </div>
    )
}
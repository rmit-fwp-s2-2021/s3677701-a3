import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function MealPlan(props){

    const location = useLocation();
    const [data, setData] = useState(location.state);

    return(
        <div className="meal-plans">
            <h1>Meal plan</h1>
        </div>
    )
}
const Meals = {
  anything: {
    breakfast: {
      meals: [
        {
          meal_name: "Knock-Oats",
          img: "knock-oats.PNG",
          calories: 451,
        },
      ],
    },
    lunch: {
      meals: [
        {
          meal_name: "Strawberry Protein Smoothie",
          img: "strawberry-smoothie",
          calories: 400,
        },
        {
          meal_name: "Banana",
          img: "banana.PNG",
          calories: 89,
        },
      ],
    },
    dinner: {
      meals: [
        {
          meal_name: "Asian Style Beef and Broccoli",
          img: "beef.PNG",
          calories: 246.5,
        },
        {
          meal_name: "Fried Rice",
          img: "fried-rice.PNG",
          calories: 250,
        },
      ],
    },
    snack: {
      meals: [
        {
          meal_name: "Turkey Sandwich",
          img: "turkey.PNG",
          calories: 177,
        },
      ],
    },
  },
};


/**
 * Save a meal plan to local storage.
 * @param {object} meal_plan 
 */
function setPlan(meal_plan){
    localStorage.setItem("Meal plan", JSON.stringify(meal_plan));
}
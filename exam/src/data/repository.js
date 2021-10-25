const Meals = {
  anything: {
    breakfast: {
      meals: [
        {
          name: "Knock-Oats",
          img: "knock-oats.PNG",
          calories: 451,
          type: "Breakfast",
        },
      ],
    },
    lunch: {
      meals: [
        {
          name: "Strawberry Protein Smoothie",
          img: "strawberry-smoothie.PNG",
          calories: 400,
          type: "Lunch",
        },
        {
          name: "Banana",
          img: "banana.PNG",
          calories: 89,
          type: "Lunch",
        },
      ],
    },
    dinner: {
      meals: [
        {
          name: "Asian Style Beef and Broccoli",
          img: "beef.PNG",
          calories: 246.5,
          type: "Dinner",
        },
        {
          name: "Fried Rice",
          img: "fried-rice.PNG",
          calories: 250,
          type: "Dinner",
        },
      ],
    },
    snack: {
      meals: [
        {
          name: "Turkey Sandwich",
          img: "turkey.PNG",
          calories: 177,
          type: "Snack",
        },
      ],
    },
  },
  vegan: {
    breakfast: {
      meals: [
        {
          name: "Vegan Knock-Oats",
          img: "knock-oats.PNG",
          calories: 451,
          type: "Breakfast",
        },
      ],
    },
    lunch: {
      meals: [
        {
          name: "Kale Smoothie",
          img: "kale-smoothie.PNG",
          calories: 400,
          type: "Lunch",
        },
        {
          name: "Banana",
          img: "banana.PNG",
          calories: 89,
          type: "Lunch",
        },
      ],
    },
    dinner: {
      meals: [
        {
          name: "Vegetable Stir Fry",
          img: "vege-stir.PNG",
          calories: 246.5,
          type: "Dinner",
        },
        {
          name: "Vegan Dumplings",
          img: "dumplings.PNG",
          calories: 250,
          type: "Dinner",
        },
      ],
    },
    snack: {
      meals: [
        {
          name: "Vegan sandwich",
          img: "vegan-sandwich.PNG",
          calories: 177,
          type: "Snack",
        },
      ],
    },
  }
};


/**
 * Get meal for specified params.
 * @param {string} diet_type
 * @param {string} meals 
 * @param {number} calories 
 * @returns List of meal objects
 */
function getMeals(diet_type, meals, calories){
  let meal_plan = Meals
  if(diet_type === "Anything"){
    meal_plan = Meals.anything;
  }else if (diet_type === "Vegan"){
    meal_plan = Meals.vegan;
  }else{
    console.log(`Bad input. Unknown diet type: ${diet_type}`)
    return []
  }

  let daily_meals = ''
  switch(meals){
    case "2":
      daily_meals = [meal_plan.breakfast, meal_plan.lunch];
      break;
    case "3":
      daily_meals = [meal_plan.breakfast, meal_plan.lunch, meal_plan.dinner];
      break;
    case "4":
      daily_meals = [meal_plan.breakfast, meal_plan.lunch, meal_plan.dinner, meal_plan.snack];
      break;
    default:
      console.log("Bad input: Unknow number of meals.");
      return;
  }

  // filter by calories.
  let max_calories = calories;
  const acceptable_meals = []
  const acceptable_deviance = 40;
  for(const meal_choices of daily_meals){
    for(const choice of meal_choices.meals){
      const food_calories = choice.calories;
      if(max_calories >= food_calories){
        const meal_plan_item = createMealPlanItem(choice.type, choice.name, choice.calories, choice.img);
        acceptable_meals.push(meal_plan_item)
        max_calories -= food_calories;
      }else{
        // check if calorie is still in acceptable range.
        if(food_calories - max_calories <= acceptable_deviance){
          const meal_plan_item = createMealPlanItem(choice.type, choice.name, choice.calories, choice.img);
          acceptable_meals.push(meal_plan_item)
          max_calories -= food_calories;
        }
        // Out of acceptable calories.
        break;
      }
    }
  }


  // Check for leftover calories and increase serving size.
  if(max_calories >= 400){
    for(let i = 0; i < acceptable_meals.length; i++){
      if(acceptable_meals[i].quantity >= 1 && max_calories >= 0){
        acceptable_meals[i].quantity++;
        max_calories -= acceptable_meals[i].calories;
      }
    }
  }
  return acceptable_meals;

}

function createMealPlanItem(meal_type, meal_name, calories, img, quantity = 1){
 const meal_item = {
   type: meal_type,
   name: meal_name,
   calories: calories,
   img: img,
   quantity: quantity,
 }

 return meal_item;
}

/**
 * Save a meal plan to local storage.
 * @param {object} meal_plan 
 */
function setPlan(meal_plan){
    localStorage.setItem("Meal plan", JSON.stringify(meal_plan));
}

export{
  getMeals,
  setPlan
}
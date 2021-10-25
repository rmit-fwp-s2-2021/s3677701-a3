import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DietTags from "./DietTags";

export default function Form() {
  const history = useHistory();

  const [fields, setFields] = useState({
    meals: "2",
    calories: 0,
  });

  const [diet_type, setDietType] = useState(null);

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const data = {
        meals: fields.meals,
        calories: fields.calories,
        diet_type: diet_type,
      };

      history.push({
        pathname: "/mealPlan",
        state: { fields: data },
      });
    }
  };

  const handleValidation = () => {
    const current_errors = {};
    let key = "meals";
    let field = fields[key];
    if (field === 0) current_errors[key] = "Meals need to be selected.";

    key = "calories";
    field = fields[key];
    if (field <= 0)
      current_errors[key] =
        "Calorie amount needs to be entered and must be greater than 0.";

    key = "diet_type";
    // check if a diet type is selected
    if (diet_type === null)
      current_errors[key] = "A diet type needs to be selected.";

    setErrors(current_errors);
    return Object.keys(current_errors).length === 0;
  };

  const handleTagSelect = (event, tag_id, tag_name) => {
    event.preventDefault();
    const active_class = "active-btn";

    // remove all active classes
    const active_btns = document.querySelector("." + active_class);
    if (active_btns) {
      active_btns.classList.remove(active_class);
    }

    const tag = document.querySelector("#" + tag_id);
    // Toggle and add to state.
    if (tag.classList.contains(active_class)) {
      tag.classList.remove(active_class);
      setDietType(null);
    } else {
      tag.classList.add(active_class);
      setDietType(tag_name);
    }
  };

  return (
    <div className="form-container text-center">
      <form onSubmit={handleSubmit}>
        <DietTags handleTagSelect={handleTagSelect} />
        {errors.diet_type && (
          <div className="text-danger">{errors.diet_type}</div>
        )}
        <div>&nbsp;</div>
        <div className="form-group">
          <label htmlFor="calories">I want to eat</label>{" "}
          <input
            id="calories"
            type="number"
            min="0"
            className="form-control"
            name="calories"
            onChange={handleInputChange}
          ></input>
          {errors.calories && (
            <div className="text-danger">{errors.calories}</div>
          )}
          <label>Calories</label>
        </div>

        <div className="meals form-group">
          <label htmlFor="meals">in</label>{" "}
          <select
            id="inputState"
            className="form-control"
            name="meals"
            onChange={handleInputChange}
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <label>meals</label>
          {errors.meals && <div className="text-danger">{errors.meals}</div>}
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Generate"
          ></input>
        </div>
      </form>
    </div>
  );
}

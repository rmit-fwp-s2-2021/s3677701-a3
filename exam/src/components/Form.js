import React, { useState } from "react";
import DietTags from "./DietTags";

export default function Form() {


    const [fields, setFields] = useState({
        meals: 0,
        calories: 0
    })

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sbumit");
  };

  const handleTagSelect = (event, tag_id) => {
    event.preventDefault();
    const active_class = "active-btn";

    // remove all active classes
    const active_btns = document.querySelector("." + active_class);
    if (active_btns) {
      active_btns.classList.remove(active_class);
    }

    const tag = document.querySelector("#" + tag_id);
    tag.classList.toggle(active_class);
  };

  return (
    <div className="form-container text-center">
      <form onSubmit={handleSubmit}>
        <DietTags handleTagSelect={handleTagSelect} />
        <div>&nbsp;</div>
        <div className="form-group">
          <label htmlFor="calories">I want to eat</label>{" "}
          <input id="calories" type="number" className="form-control" name="calories" onChange={handleInputChange}></input>
          <label>Calories</label>
        </div>

        <div className="meals form-group">
          <label htmlFor="meals">in</label>{" "}
          <select id="inputState" className="form-control" name="meals" onChange={handleInputChange}>
            <option defaultValue>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <label>meals</label>
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

import React from "react";
import DietTags from "./DietTags";

export default function Form(){


    const handleTagSelect = (event) => {
        event.preventDefault();
        console.log("clicked tag.")
    }

    return(
        <div className="form-container">
            <h1>Form!</h1>
            <DietTags handleTagSelect={handleTagSelect} />
        </div>
    )
}
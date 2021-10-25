import React from "react";
import DietTags from "./DietTags";

export default function Form(){


    const handleTagSelect = (event, tag_id) => {
        event.preventDefault();
        const active_class = "active-btn";

        // remove all active classes
        const active_btns = document.querySelector("." + active_class);
        if(active_btns){
            active_btns.classList.remove(active_class)
        }
        
        const tag = document.querySelector('#' + tag_id);
        tag.classList.toggle(active_class);
    }

    return(
        <div className="form-container">
            <h1>Form!</h1>
            <DietTags handleTagSelect={handleTagSelect} />
        </div>
    )
}
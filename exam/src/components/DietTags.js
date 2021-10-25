import React from "react";

export default function DietTags(props) {
  const tags = [
    { name: "Anything", icon: "fas fa-bread-slice" },
    { name: "Paleo", icon: "fas fa-drumstick-bite" },
    { name: "Vegetarian", icon: "fas fa-carrot" },
    { name: "Vegan", icon: "fas fa-heart" },
    { name: "Ketogenic", icon: "fas fa-egg" },
    { name: "Mediterranean", icon: "fas fa-fish" },
  ];

  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return (
          <button
            key={"tag-" + index}
            className="btn btn-small"
            id={"tag-" + index}
            onClick={(event) => {
              props.handleTagSelect(event, "tag-" + index);
            }}
          >
            <i className={tag.icon}></i>
            <br />
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}

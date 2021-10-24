import React from "react";

export default function DietTags(props) {
  const tags = [
    { name: "Anything", icon: "fas fa-bread-slice" },
    { name: "Paleo", icon: "" },
    { name: "Vegetarian", icon: "" },
    { name: "Vegan", icon: "" },
    { name: "Ketogenic", icon: "" },
    { name: "Mediterranean", icon: "" },
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
            <i class={tag.icon}></i>
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}

import { render, screen, fireEvent } from "@testing-library/react";
import DietTags from "./DietTags";

// Global data for tests.
let tags;
let container;

beforeAll(() => {
  tags = [
    { name: "Anything", icon: "fas fa-bread-slice" },
    { name: "Paleo", icon: "fas fa-drumstick-bite" },
    { name: "Vegetarian", icon: "fas fa-carrot" },
    { name: "Vegan", icon: "fas fa-heart" },
    { name: "Ketogenic", icon: "fas fa-egg" },
    { name: "Mediterranean", icon: "fas fa-fish" },
  ];
});

beforeEach(() => {
  const utils = render(<DietTags />);
  container = utils.container;
});

test("Render tags", () => {
  expect(container).toBeInTheDocument();
});

/**
 * Test to ensure all tags have been displayed.
 * This will prevent issues arising from dev forgotting to add a tag or deleting a tag by mistake when testing etc.
 */
test("Contains all tags", () => {
    const tag_container = document.querySelector(".tags");
    expectTagContainer_Btns_ToBe(tag_container, tags.length);
});

function expectTagContainer_Btns_ToBe(tag_container, length){
    expect(tag_container).toBeInTheDocument();

    const btn = tag_container.getElementsByTagName("button");
    expect(btn).toHaveLength(length)
}
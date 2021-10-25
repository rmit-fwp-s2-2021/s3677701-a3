import { render } from "@testing-library/react";
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

/**
 * Test to check if component renders. Good test to have as it checks if a component is returned.
 */
test("Render tags", () => {
  expect(container).toBeInTheDocument();
});

/**
 * Test to ensure all tags have been displayed.
 * This will prevent issues arising from dev forgotting to add a tag or deleting a tag by mistake when testing etc.
 * Test also ensures that the right tag name is displayed which prevents typos getting into production or wrong tags displayed.
 */
test("Contains all tags", () => {
  const tag_container = document.querySelector(".tags");
  expectTagContainer_Btns_ToBe(tag_container, tags.length);

  // Ensure tag data has been displayed.
  const btn = tag_container.getElementsByTagName("button");
  for (let i = 0; i < btn.length; i++) {
    const text = btn[i].textContent;
    expect(text).toContain(tags[i].name);
  }
});

function expectTagContainer_Btns_ToBe(tag_container, length) {
  expect(tag_container).toBeInTheDocument();

  const btn = tag_container.getElementsByTagName("button");
  expect(btn).toHaveLength(length);
}

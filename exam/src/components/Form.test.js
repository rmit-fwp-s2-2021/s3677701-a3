import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

let container;

beforeEach(() => {
  const utils = render(<Form />);
  container = utils.container;
});

test("Render form", () => {
  expect(container).toBeInTheDocument();
});

/**
 * Test to check if calorie input field is working as expected.
 * Ensures change handler is implemented correctly.
 */
test("Calorie input", () => {
  const input = container.querySelector("#calories");

  fireEvent.change(input, { target: { value: 1600 } });
  expect(input.value).toBe("1600");
});

/**
 * Test to ensure bad input is handled and an error message is shown.
 * This test is important as bad values might mess with the database if they go through.
 */
test("Bad calorie input renders error", () => {
  const input = container.querySelector("#calories");
  const button = screen.getByDisplayValue("Generate");
  fireEvent.change(input, { target: { value: 0 } });
  expect(input.value).toBe("0");
  fireEvent.click(button);
  expect(
    screen.getByText(
      "Calorie amount needs to be entered and must be greater than 0.",
      { exact: false }
    )
  ).toBeInTheDocument();
});

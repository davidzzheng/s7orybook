import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

test("renders primary button with default args", () => {
  render(<Primary />);
  const buttonElement = screen.getByText(/Click here/i);
  expect(buttonElement).not.toBeNull();
});

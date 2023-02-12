import type { Meta, StoryObj } from "@storybook/react";

// import { within, userEvent } from "@storybook/testing-library";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click here",
  },
};

export const Small: Story = {
  args: {
    children: "Small button",
    size: "sm",
  },
};

export const Anchor: Story = {
  args: {
    children: "Anchor",
    as: "a",
    href: "https://www.google.com",
    target: "_blank",
    variant: "secondary",
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   await userEvent.click(canvas.getByText("Anchor"));

  // },
};

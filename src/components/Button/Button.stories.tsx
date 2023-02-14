import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click here",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
  },
};

export const Hover: Story = {
  args: {
    children: "Hover",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  args: {
    children: "Active",
  },
  parameters: {
    pseudo: { active: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);

    const btn = canvas.getByRole("button");

    userEvent.click(btn);
  },
};

export const Focused: Story = {
  args: {
    children: "Focused",
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const Small: Story = {
  args: {
    children: "Small button",
    size: "sm",
  },
};

export const Uppercase: Story = {
  args: {
    children: "UPPERCASE",
    size: "sm",
    variant: "secondary",
  },
};

export const Anchor: Story = {
  args: {
    children: "Anchor",
    as: "a",
    href: "https://www.google.com",
    target: "_blank",
    variant: "secondary",
    role: "link",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge.tsx";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Status" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = { args: { variant: "soft" } };
export const Accent: Story = { args: { variant: "accent" } };
export const Warning: Story = { args: { variant: "warning", children: "Förfallen" } };
export const Success: Story = { args: { variant: "success", children: "Klar" } };

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button.tsx";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Primär åtgärd",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Shadcn/ui Button med CVA-varianter. Focus-ring via --ring. Respekterar prefers-reduced-motion för active-scale.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Small: Story = { args: { size: "sm" } };

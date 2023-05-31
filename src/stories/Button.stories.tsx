import React from "react";
import Button from "../components/Button/Button";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => (
  <Button text="Learn More" {...args} />
);

export const ButtonMainStory = Template.bind({});
ButtonMainStory.storyName = "ButtonMain";
ButtonMainStory.args = {
  text: "Learn More", // Corrected assignment with a colon
};

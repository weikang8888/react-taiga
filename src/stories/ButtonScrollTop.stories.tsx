import React from "react";
import ButtonScrollTop from "../components/Button/ButtonScrollTop";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: ButtonScrollTop,
} as Meta<typeof ButtonScrollTop>;

const Template: Story<typeof ButtonScrollTop> = (args) => (
  <ButtonScrollTop style={args.style} />
);

export const ButtonScrollTopMainStory = Template.bind({});
ButtonScrollTopMainStory.storyName = "ButtonScrollTop";
ButtonScrollTopMainStory.args = {
  style: { display: "block", visibility: "visible", opacity: 1 },
};

import React from "react";
import Header from "../components/Header/Header";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: Story<typeof Header> = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
HeaderStory.storyName = "HeaderTop";
HeaderStory.args = { style: { background: "black" } };

import React from "react";
import { Story, Meta } from "@storybook/react";
import Popover from "../components/Popover/PopoverVideo";

export default {
  title: "Components/Popover",
  component: Popover,
} as Meta<typeof Popover>;

const Template: Story<typeof Popover> = (args) => <Popover />;

export const PopoverVideoStory = Template.bind({});
PopoverVideoStory.storyName = "PopoverVideo";
PopoverVideoStory.args = {
  style: { position: "relative" },
};

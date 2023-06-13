import React from "react";
import { Story, Meta } from "@storybook/react";
import Loader from "../components/Loader/Loader";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta<typeof Loader>;

const Template: Story<typeof Loader> = (args) => <Loader />;

export const LoaderStory = Template.bind({});
LoaderStory.storyName = "LoaderDot";

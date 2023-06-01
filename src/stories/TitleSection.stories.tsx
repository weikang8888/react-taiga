import React from "react";
import TitleSection from "../components/TitleSection/TitleSection";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/TitleSection",
  component: TitleSection,
} as Meta<typeof TitleSection>;

const Template: Story<typeof TitleSection> = (args) => (
  <TitleSection {...args} />
);

export const TitleSectionStory = Template.bind({});
TitleSectionStory.storyName = "TitleSections";
TitleSectionStory.args = {
  subtitle: "process",
  title: "Our Working Process",
  description: ".",
};

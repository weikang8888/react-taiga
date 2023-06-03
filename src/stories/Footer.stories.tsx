import React from "react";
import { Story, Meta } from "@storybook/react";
import Footer from "../components/Footer/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta<typeof Footer>;

const Template: Story<typeof Footer> = () => <Footer />;

export const FooterStory = Template.bind({});
FooterStory.storyName = "FooterMain";
FooterStory.args = {};

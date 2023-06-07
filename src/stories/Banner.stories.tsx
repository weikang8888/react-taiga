import React from "react";
import { Story, Meta } from "@storybook/react";
import Banner from "../components/Banner/Banner";

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta<typeof Banner>;

const Template: Story<typeof Banner> = () => <Banner bannerImage={""} bannerTitle={"About Us"} />;

export const BannerStory = Template.bind({});
BannerStory.storyName = "Banner";
BannerStory.args = {};

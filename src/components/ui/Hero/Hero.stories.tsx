import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Hero } from "./index"

export default {
  title: "UI/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args} />
)

export const Default = Template.bind({})
Default.args = {}
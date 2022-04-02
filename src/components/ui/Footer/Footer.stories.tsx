import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Footer } from "./index"

export default {
  title: "UI/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
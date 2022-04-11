import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { SearchBar } from "./index"

export default {
  title: "UI/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
)

export const Default = Template.bind({})
Default.args = {}
import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Tag } from "./index"

export default {
  title: "UI/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

const soccerTag = {
  label: "サッカー",
  path: "soccer",
}

export const Default = Template.bind({})
Default.args = { tag: soccerTag }

import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { TagList } from "./Tag"

import { Tag } from "./index"

export default {
  title: "UI/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>

const SingleTemplate: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

const soccerTag = {
  label: "サッカー",
  path: "soccer",
}

export const Single = SingleTemplate.bind({})
Single.args = { tag: soccerTag }

const ListTemplate: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
)

export const List = ListTemplate.bind({})
List.args = { tags: [soccerTag, soccerTag, soccerTag, soccerTag] }

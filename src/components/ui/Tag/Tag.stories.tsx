import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { ATHLETIC_TAG_ALL } from "@/constant/tag"

import { Tag, TagList } from "./index"

export default {
  title: "UI/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>

const SingleTemplate: ComponentStory<typeof Tag> = (args) => <Tag {...args} />
const ListTemplate: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
)

export const Single = SingleTemplate.bind({})
Single.args = { tag: ATHLETIC_TAG_ALL[0] }

export const AthleticAllTagList = ListTemplate.bind({})
AthleticAllTagList.args = {
  tags: ATHLETIC_TAG_ALL,
  label: "運動系のすべてのタグ",
}

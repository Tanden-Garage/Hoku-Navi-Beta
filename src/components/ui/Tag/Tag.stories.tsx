import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import {
  ATHLETIC_TAG_ALL,
  ATHLETIC_TAG_POPULAR,
  CULTURAL_TAG_ALL,
  CULTURAL_TAG_POPULAR,
} from "@/constant/tag"

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

export const AthleticPopularTagList = ListTemplate.bind({})
AthleticPopularTagList.args = {
  tags: ATHLETIC_TAG_POPULAR,
  label: "運動系の人気のタグ",
}

export const CulturalAllTagList = ListTemplate.bind({})
CulturalAllTagList.args = {
  tags: CULTURAL_TAG_ALL,
  label: "文化系のすべてのタグ",
}

export const CulturalPopularTagList = ListTemplate.bind({})
CulturalPopularTagList.args = {
  tags: CULTURAL_TAG_POPULAR,
  label: "文化系の人気のタグ",
}

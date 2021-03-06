import {
  ATHLETIC_TAG_ALL,
  ATHLETIC_TAG_POPULAR,
  CULTURAL_TAG_ALL,
  CULTURAL_TAG_POPULAR,
} from "@/constant/tag"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

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
Single.args = { tag: { label: "合気道", path: "/athletic/aikido" } }

export const AthleticAllTagList = ListTemplate.bind({})
AthleticAllTagList.args = {
  tags: ATHLETIC_TAG_ALL,
}

export const AthleticPopularTagList = ListTemplate.bind({})
AthleticPopularTagList.args = {
  tags: ATHLETIC_TAG_POPULAR,
}

export const CulturalAllTagList = ListTemplate.bind({})
CulturalAllTagList.args = {
  tags: CULTURAL_TAG_ALL,
}

export const CulturalPopularTagList = ListTemplate.bind({})
CulturalPopularTagList.args = {
  tags: CULTURAL_TAG_POPULAR,
}

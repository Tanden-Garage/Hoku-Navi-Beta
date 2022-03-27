import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Tag, TagList } from "./index"

export default {
  title: "UI/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>

const SingleTemplate: ComponentStory<typeof Tag> = (args) => <Tag {...args} />
const ListTemplate: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
)

const soccerTag = {
  label: "サッカー",
  path: "soccer",
}

const tennisTag = {
  label: "テニス",
  path: "tennis",
}

const tagList = [
  soccerTag,
  tennisTag,
  soccerTag,
  tennisTag,
  soccerTag,
  tennisTag,
]

export const Single = SingleTemplate.bind({})
Single.args = { tag: soccerTag }

export const List = ListTemplate.bind({})
List.args = { tags: tagList }

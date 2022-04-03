import { ComponentStory, ComponentMeta } from "@storybook/react"

import { mockClubList } from "@/mocks/Club"

import { AthleticTagPageView } from "./View"

export default {
  title: "Page/Athletic/Tag",
  component: AthleticTagPageView,
} as ComponentMeta<typeof AthleticTagPageView>

const Template: ComponentStory<typeof AthleticTagPageView> = (args) => (
  <AthleticTagPageView {...args} />
)

export const Default = Template.bind({})
Default.args = {
  tagName: "サッカー",
  clubs: mockClubList,
}

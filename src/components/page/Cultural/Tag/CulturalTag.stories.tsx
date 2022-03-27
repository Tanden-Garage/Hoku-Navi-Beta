import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CulturalTagPageView } from "./View"

export default {
  title: "Page/Cultural/Tag",
  component: CulturalTagPageView,
} as ComponentMeta<typeof CulturalTagPageView>

const Template: ComponentStory<typeof CulturalTagPageView> = (args) => (
  <CulturalTagPageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}

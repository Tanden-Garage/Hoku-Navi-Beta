import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CulturalPageView } from "./View"

export default {
  title: "Page/Athletic",
  component: CulturalPageView,
} as ComponentMeta<typeof CulturalPageView>

const Template: ComponentStory<typeof CulturalPageView> = (args) => (
  <CulturalPageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}

import { CulturalPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/Athletic",
  component: CulturalPageView,
} as ComponentMeta<typeof CulturalPageView>

const Template: ComponentStory<typeof CulturalPageView> = (args) => (
  <CulturalPageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}

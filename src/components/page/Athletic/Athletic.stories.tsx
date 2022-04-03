import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AthleticPageView } from "./View"

export default {
  title: "Page/Athletic",
  component: AthleticPageView,
} as ComponentMeta<typeof AthleticPageView>;

const Template: ComponentStory<typeof AthleticPageView> = (args) => (
  <AthleticPageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}
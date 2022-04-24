import { Schedule } from "@/components/model/Schedule/Schedule"

import { mockSchedule } from "@/mocks/Schedule"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Model/Schedule/Schedule",
  component: Schedule,
} as ComponentMeta<typeof Schedule>

const Template: ComponentStory<typeof Schedule> = (args) => (
  <Schedule {...args} />
)

export const Default = Template.bind({})
Default.args = {
  schedule: mockSchedule,
}

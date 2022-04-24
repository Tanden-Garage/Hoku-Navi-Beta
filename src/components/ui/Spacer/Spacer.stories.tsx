import { Spacer } from "@/components/ui/Spacer"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "UI/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 36,
}

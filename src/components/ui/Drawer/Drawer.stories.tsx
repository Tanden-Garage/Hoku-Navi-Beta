import type { ComponentStory, ComponentMeta } from "@storybook/react"

import { Drawer } from "./index"

export default {
  title: "UI/Drawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Default = Template.bind({})
Default.args = {}

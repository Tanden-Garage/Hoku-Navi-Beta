import type { ComponentStory, ComponentMeta } from "@storybook/react"

import { Img } from "./index"

export default {
  title: "UI/Img",
  component: Img,
} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />

export const Default = Template.bind({})
Default.args = {}

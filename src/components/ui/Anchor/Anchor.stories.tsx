import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Anchor } from "./index"

export default {
  title: "UI/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor {...args}>link</Anchor>
)

export const Default = Template.bind({})
Default.args = {
  href: "/",
}

export const Primary = Template.bind({})
Primary.args = {
  href: "/",
  className: "link-primary",
}

export const Extarnal = Template.bind({})
Extarnal.args = {
  href: "https://zenn.dev/takepepe/articles/atoms-type-definitions",
  isExtarnal: true,
}

export const NoHref = Template.bind({})
NoHref.args = {}

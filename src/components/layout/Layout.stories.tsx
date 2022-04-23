import { TopPageView } from "@/components/page/Top/View"

import { Layout } from "@/components/layout"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Lauout",
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <TopPageView />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

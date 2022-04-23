import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Layout } from "@/components/layout"

import { NotFoundPageView } from "./View"

export default {
  title: "Page/NotFound",
  component: NotFoundPageView,
} as ComponentMeta<typeof NotFoundPageView>;

const Template: ComponentStory<typeof NotFoundPageView> = (args) => (
  <Layout>
    <NotFoundPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}
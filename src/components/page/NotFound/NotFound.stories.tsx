import { Layout } from "@/components/layout"

import { NotFoundPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/NotFound",
  component: NotFoundPageView,
} as ComponentMeta<typeof NotFoundPageView>

const Template: ComponentStory<typeof NotFoundPageView> = (args) => (
  <Layout>
    <NotFoundPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {
  path: "/notfound ",
}

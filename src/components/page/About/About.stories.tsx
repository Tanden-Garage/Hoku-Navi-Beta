import { Layout } from "@/components/layout"

import { AboutPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/About",
  component: AboutPageView,
} as ComponentMeta<typeof AboutPageView>

const Template: ComponentStory<typeof AboutPageView> = (args) => (
  <Layout>
    <AboutPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

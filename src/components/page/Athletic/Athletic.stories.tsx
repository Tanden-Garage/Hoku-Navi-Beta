import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Layout } from "@/components/layout"

import { AthleticPageView } from "./View"

export default {
  title: "Page/Athletic",
  component: AthleticPageView,
} as ComponentMeta<typeof AthleticPageView>

const Template: ComponentStory<typeof AthleticPageView> = (args) => (
  <Layout>
    <AthleticPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

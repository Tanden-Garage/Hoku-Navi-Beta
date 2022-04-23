import { Layout } from "@/components/layout"

import { ContactPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/Contact",
  component: ContactPageView,
} as ComponentMeta<typeof ContactPageView>

const Template: ComponentStory<typeof ContactPageView> = (args) => (
  <Layout>
    <ContactPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Layout } from "@/components/layout"

import { PlivacyPolicyPageView } from "./View"

export default {
  title: "Page/PlivacyPolicy",
  component: PlivacyPolicyPageView,
} as ComponentMeta<typeof PlivacyPolicyPageView>

const Template: ComponentStory<typeof PlivacyPolicyPageView> = (args) => (
  <Layout>
    <PlivacyPolicyPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

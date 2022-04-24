import { Layout } from "@/components/layout"

import { PlivacyPolicyPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

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

import { Layout } from "@/components/layout"

import { RecruitPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/Recruit",
  component: RecruitPageView,
} as ComponentMeta<typeof RecruitPageView>

const Template: ComponentStory<typeof RecruitPageView> = (args) => (
  <Layout>
    <RecruitPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

import { 処理済み } from "@/utils/__test__/data"

import { Layout } from "@/components/layout"

import { SakuinPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/Sakuin",
  component: SakuinPageView,
} as ComponentMeta<typeof SakuinPageView>

const Template: ComponentStory<typeof SakuinPageView> = (args) => (
  <Layout>
    <SakuinPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {
  items: 処理済み,
}

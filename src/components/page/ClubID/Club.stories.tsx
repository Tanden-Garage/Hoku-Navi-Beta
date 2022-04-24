import { Layout } from "@/components/layout"
import { medSoccer } from "@/mocks/Club"

import { ClubIdPageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/Club",
  component: ClubIdPageView,
} as ComponentMeta<typeof ClubIdPageView>

const Template: ComponentStory<typeof ClubIdPageView> = (args) => (
  <Layout>
    <ClubIdPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {
  club: medSoccer,
}

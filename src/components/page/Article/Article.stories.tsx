import { Layout } from "@/components/layout"

import { ArticlePageView } from "./View"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Page/Article",
  component: ArticlePageView,
} as ComponentMeta<typeof ArticlePageView>

const Template: ComponentStory<typeof ArticlePageView> = (args) => (
  <Layout>
    <ArticlePageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}

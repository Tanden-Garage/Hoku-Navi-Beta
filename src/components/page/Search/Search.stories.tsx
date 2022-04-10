import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Layout } from "@/components/layout"
import { mockClubList } from "@/mocks/Club"

import { SearchPageView } from "./View"

export default {
  title: "Page/Search",
  component: SearchPageView,
} as ComponentMeta<typeof SearchPageView>

const Template: ComponentStory<typeof SearchPageView> = (args) => (
  <Layout>
    <SearchPageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {
  currentPage: 1,
  hasNext: true,
  searchText: "医学部",
  clubs: mockClubList,
}

export const Page2 = Template.bind({})
Page2.args = {
  currentPage: 2,
  hasNext: false,
  searchText: "医学部",
  clubs: mockClubList,
}

export const LongSearchText = Template.bind({})
LongSearchText.args = {
  currentPage: 1,
  hasNext: true,
  searchText: "医学部大好きっ子ちゃんでーすうふふふふふふ",
  clubs: mockClubList,
}

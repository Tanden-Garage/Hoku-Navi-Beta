import { UserTable } from "@/components/model/User/UserTable"

import { mockUserList } from "@/mocks/User"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Model/User/UserTable",
  component: UserTable,
} as ComponentMeta<typeof UserTable>

const Template: ComponentStory<typeof UserTable> = (args) => (
  <UserTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  users: mockUserList,
}

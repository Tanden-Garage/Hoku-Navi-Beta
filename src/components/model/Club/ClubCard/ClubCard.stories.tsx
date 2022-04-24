import { ClubCard } from "@/components/model/Club/ClubCard"

import { medSoccer } from "@/mocks/Club"

import type { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Model/Club/ClubCard",
  component: ClubCard,
} as ComponentMeta<typeof ClubCard>

const Template: ComponentStory<typeof ClubCard> = (args) => (
  <ClubCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  club: medSoccer,
}

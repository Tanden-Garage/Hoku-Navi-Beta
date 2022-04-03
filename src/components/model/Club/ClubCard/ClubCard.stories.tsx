import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { ClubCard } from "@/components/model/Club/ClubCard"

import { medSoccer } from "@/mocks/Club"

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

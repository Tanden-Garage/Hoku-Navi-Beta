import { Club } from "@/types/Club"

import { ClubCard } from "@/components/model/Club/ClubCard"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"
import { TagList } from "@/components/ui/Tag"

import { ATHLETIC_TAG_FOR_ATHLETIC, CULTURAL_TAG_ALL } from "@/constant/tag"

import type { VFC } from "react"

interface Props {
  label: string
  clubs: Club[]
}

export const AthleticTagPageView: VFC<Props> = ({ label, clubs }) => {
  return (
    <main className="flex flex-col items-center p-4 w-full">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>
            <Anchor href="/cultural">運動系団体</Anchor>
          </li>
          <li>{label}</li>
        </ul>
      </div>

      <div className="prose">
        <h1>{label}の部活・サークル一覧</h1>
      </div>

      <Spacer size={12} />

      <div className="grid gap-12 ">
        {clubs.map((club) => (
          <ClubCard club={club} key={club.id} />
        ))}
      </div>

      <Spacer size={12} />

      <TagList tags={ATHLETIC_TAG_FOR_ATHLETIC} label="他の運動系も探す" />

      <Spacer size={12} />

      <TagList tags={CULTURAL_TAG_ALL} label="文化系も探してみる" />
    </main>
  )
}

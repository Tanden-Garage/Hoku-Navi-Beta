import { Club } from "@/types/Club"

import { ClubCard } from "@/components/model/Club/ClubCard"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"
import { TagList } from "@/components/ui/Tag"

import { ATHLETIC_TAG_FOR_CULTURAL, CULTURAL_TAG_ALL } from "@/constant/tag"

import type { VFC } from "react"

interface Props {
  tagName: string
  clubs: Club[]
}

export const CulturalTagPageView: VFC<Props> = ({ tagName, clubs }) => {
  return (
    <main className="flex flex-col items-center p-4 w-full">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>
            <Anchor href="/cultural">文化系団体</Anchor>
          </li>
          <li>{tagName}</li>
        </ul>
      </div>

      <div className="prose">
        <h1>{tagName}の部活・サークル一覧</h1>
      </div>

      <Spacer size={12} />

      <div className="grid gap-12 ">
        {clubs.map((club) => (
          <ClubCard club={club} key={club.id} />
        ))}
      </div>

      <Spacer size={12} />

      <div className="prose">
        <h2>他の文化系も探す</h2>
      </div>

      <Spacer size={8} />

      <TagList tags={CULTURAL_TAG_ALL} />

      <Spacer size={12} />

      <div className="prose">
        <h2>運動系も探してみる</h2>
      </div>

      <Spacer size={8} />

      <TagList tags={ATHLETIC_TAG_FOR_CULTURAL} />
    </main>
  )
}

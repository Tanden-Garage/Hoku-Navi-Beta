import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"
import { TagList } from "@/components/ui/Tag"

import { CULTURAL_TAG_ALL } from "@/constant/tag"

import type { VFC } from "react"

export const CulturalPageView: VFC = () => {
  return (
    <main className="flex flex-col justify-center items-center  p-8 ">
      <h1>文化系のすべてのタグ一覧</h1>

      <Spacer size={12} />

      <TagList tags={CULTURAL_TAG_ALL} />

      <Spacer size={12} />

      <Anchor href="/athletic" className="btn btn-secondary btn-wide">
        運動系のタグも見る
      </Anchor>
    </main>
  )
}

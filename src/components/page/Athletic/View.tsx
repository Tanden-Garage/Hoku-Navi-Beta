import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"
import { TagList } from "@/components/ui/Tag"

import { ATHLETIC_TAG_ALL } from "@/constant/tag"

import type { FC } from "react"

export const AthleticPageView: FC = () => {
  return (
    <main className="flex flex-col justify-center items-center  p-8 ">
      <h1>運動系のすべてのタグ一覧</h1>

      <Spacer size={12} />

      <TagList tags={ATHLETIC_TAG_ALL} />

      <Spacer size={12} />

      <Anchor href="/cultural" className="btn btn-secondary btn-wide">
        文化系のタグも見る
      </Anchor>
    </main>
  )
}

import clsx from "clsx"
import { useCallback, useState, FC } from "react"

import { Hero } from "@/components/ui/Hero"
import { Spacer } from "@/components/ui/Spacer"
import { TagList } from "@/components/ui/Tag"

import { ATHLETIC_TAG_POPULAR, CULTURAL_TAG_POPULAR } from "@/constant/tag"

import type { CategoryType } from "@/constant/category"

export const TopPageView: FC = () => {
  const [tab, setTab] = useState<CategoryType>("athletic")
  const isAthletic = tab === "athletic"
  const tabItemProps = ["w-1/2", "tab", "tab-lifted"]

  const toAth = useCallback(() => {
    setTab("athletic")
  }, [])

  const toCul = useCallback(() => {
    setTab("cultural")
  }, [])

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Hero />

      <Spacer size={4} />

      <div className="w-full tabs">
        <a
          className={clsx(...tabItemProps, isAthletic && "tab-active")}
          onClick={toAth}
        >
          運動系
        </a>
        <a
          className={clsx(...tabItemProps, !isAthletic && "tab-active")}
          onClick={toCul}
        >
          文化系
        </a>
      </div>

      <Spacer size={4} />

      <div className="p-2">{isAthletic ? <AthView /> : <CulView />}</div>
    </main>
  )
}

const AthView: FC = () => {
  return (
    <div>
      <h2>人気の運動系タグ</h2>

      <Spacer size={8} />

      <TagList tags={ATHLETIC_TAG_POPULAR} />
    </div>
  )
}

const CulView: FC = () => {
  return (
    <div>
      <h2>人気の文化系タグ</h2>

      <Spacer size={4} />

      <TagList tags={CULTURAL_TAG_POPULAR} />
    </div>
  )
}

import clsx from "clsx"
import InnerHTML from "dangerously-set-html-content"
import { useCallback, useEffect, useState, VFC } from "react"

import type { Article } from "@/types/Article"

import { Hero } from "@/components/ui/Hero"
import { Spacer } from "@/components/ui/Spacer"
import { TagList } from "@/components/ui/Tag"

import { ATHLETIC_TAG_POPULAR, CULTURAL_TAG_POPULAR } from "@/constant/tag"
import { client } from "@/lib/client"

import type { CategoryType } from "@/constant/category"

const fetchArticle = async () =>
  await client.get<Article>({
    endpoint: "article",
    contentId: "dlumd_n8awt3",
  })

export const TopPageView: VFC = () => {
  const [tab, setTab] = useState<CategoryType>("athletic")
  const isAthletic = tab === "athletic"
  const tabItemProps = ["w-1/2", "tab", "tab-lifted"]

  const toAth = useCallback(() => {
    setTab("athletic")
  }, [])

  const toCul = useCallback(() => {
    setTab("cultural")
  }, [])

  const [test, setTest] = useState<Article>()

  useEffect(() => {
    fetchArticle().then((res) => {
      console.log(res)
      setTest(res)
    })
  })

  return (
    <main className="flex flex-col items-center">
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
      {test && (
        <InnerHTML className="m-auto max-w-2xl prose" html={test.contents} />
      )}
    </main>
  )
}

const AthView: VFC = () => {
  return (
    <div>
      <h2>人気の運動系タグ</h2>

      <Spacer size={8} />

      <TagList tags={ATHLETIC_TAG_POPULAR} />
    </div>
  )
}

const CulView: VFC = () => {
  return (
    <div>
      <h2>人気の文化系タグ</h2>

      <Spacer size={4} />

      <TagList tags={CULTURAL_TAG_POPULAR} />
    </div>
  )
}

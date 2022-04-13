import clsx from "clsx"
import { useRouter } from "next/router"
import { useEffect, useRef, VFC } from "react"

import { Club } from "@/types/Club"

import { ClubCard } from "@/components/model/Club/ClubCard"

import { Anchor } from "@/components/ui/Anchor"
import { SearchBar } from "@/components/ui/SearchBar"
import { Spacer } from "@/components/ui/Spacer"

interface SearchPageProps {
  currentPage: number
  hasNext: boolean
  searchText: string
  clubs: Club[]
}

export const SearchPageView: VFC<SearchPageProps> = ({
  currentPage,
  hasNext,
  searchText,
  clubs,
}) => {
  const router = useRouter()
  const titleRef = useRef<HTMLHeadingElement>(null)

  const textLengthLimit = 9 // ページの見出しがレスポンシブ対応時に3行以内に収まるようするため
  const isLong = searchText.length > textLengthLimit
  const truncatedText = searchText.substring(0, textLengthLimit)
  const serachTitle = isLong ? truncatedText + "..." : truncatedText

  const isFirst = currentPage === 1
  const hasResult = clubs.length !== 0

  const toPrev = () => {
    router.push(`/search?text=${searchText}&page=${currentPage - 1}`)
  }

  const toNext = () => {
    router.push(`/search?text=${searchText}&page=${currentPage + 1}`)
  }

  function handleScrollToTitle() {
    titleRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // ページネーション押下時にページトップにスクロールさせるため
    if (currentPage !== 1) handleScrollToTitle()
  })

  return (
    <main className="flex flex-col items-center p-4 min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>「{serachTitle}」 の検索結果</li>
        </ul>
      </div>

      <div className="prose">
        <h1 ref={titleRef}>
          名前や紹介に「{serachTitle}」を含む部活・サークル一覧
        </h1>
      </div>

      <Spacer size={8} />

      <SearchBar placeholder="他のキーワードで検索" />
      <Spacer size={12} />

      {hasResult ? (
        <>
          <div className="grid gap-12">
            {clubs.map((club) => (
              <ClubCard club={club} key={club.id} />
            ))}
          </div>

          <Spacer size={12} />

          <div className="btn-group ">
            <button
              disabled={isFirst}
              onClick={toPrev}
              className={clsx("btn", "btn-primary", isFirst && "btn-disabled")}
            >
              «
            </button>
            <button className="btn btn-primary" onClick={handleScrollToTitle}>
              Page {currentPage}
            </button>
            <button
              disabled={!hasNext}
              onClick={toNext}
              className={clsx("btn", "btn-primary", !hasNext && "btn-disabled")}
            >
              »
            </button>
          </div>
        </>
      ) : (
        <NoResultScreen />
      )}
    </main>
  )
}

const NoResultScreen: VFC = () => (
  <div className="text-center prose">
    <h1>Sorry!</h1>
    <p>お探しの団体は見つかりませんでした😭</p>
    <p>別の検索ワードを試してみてくださいね🔍</p>
  </div>
)

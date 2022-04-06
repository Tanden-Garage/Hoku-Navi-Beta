import clsx from "clsx"
import { useRouter } from "next/router"
import { VFC } from "react"

import { Club } from "@/types/Club"

import { ClubCard } from "@/components/model/Club/ClubCard"

import { Anchor } from "@/components/ui/Anchor"
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

  const textLengthLimit = 10
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
        <h1>名前や紹介に「{serachTitle}」を含む部活・サークル一覧</h1>
      </div>

      <Spacer size={8} />

      <form className="flex justify-center input-group">
        <input
          type="text"
          name="text"
          required
          placeholder="他のキーワードで検索"
          className="w-full max-w-sm input input-bordered"
        />
        <input name="page" value={1} className="hidden" />
        <button type="submit" className="btn btn-square btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

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
            <button className="btn btn-primary">Page {currentPage}</button>
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
        <NoResuleScreen />
      )}
    </main>
  )
}

const NoResuleScreen: VFC = () => (
  <div className="text-center prose">
    <h1>Sorry!</h1>
    <p>お探しの団体は見つかりませんでした😭</p>
    <p>別の検索ワードを試してみてくださいね🔍</p>
  </div>
)

import { useRouter } from "next/router"

import { MySEO } from "@/components/functional/SEO"
import { mockClubList } from "@/mocks/Club"

import { SearchPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const SearchPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { text, page } = router.query

  const currentPage = Number(page)

  const title = text === undefined ? "検索チュウ…" : `「${text}」の検索結果`

  return (
    <>
      <MySEO
        path="/search"
        title={title}
        description={`北大の部活・サークル紹介の中で「${text}」を含むページの一覧です `}
      />

      {!text ? (
        // router.queryからsearchTextを取得するのに少しラグがあるようなので
        <div className="flex flex-col items-center p-4 h-screen text-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <SearchPageView
          currentPage={currentPage}
          hasNext={true}
          searchText={text as string}
          clubs={mockClubList}
        />
      )}
    </>
  )
}

import Head from "next/head"
import { useRouter } from "next/router"

import { mockClubList } from "@/mocks/Club"

import { SearchPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const SearchPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { text, page } = router.query

  const currentPage = Number(page)

  return (
    <>
      <Head>
        <title>search</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!text ? (
        // router.queryからsearchTextを取得するのに少しラグがあるようなので
        <div className="flex flex-col items-center p-4 h-screen text-center prose">
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

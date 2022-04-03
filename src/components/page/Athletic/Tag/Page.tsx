import Head from "next/head"
import { useRouter } from "next/router"

import { ATHLETIC_TAG_ALL } from "@/constant/tag"
import { mockClubList } from "@/mocks/Club"

import { AthleticTagPageView } from "./View"

import type { NextPage } from "next"

export const AthleticTagPage: NextPage = () => {
  const router = useRouter()

  const path = router.asPath // /athletic/[category]のこと
  const tagName = ATHLETIC_TAG_ALL.filter((tag) => tag.path === path)[0]?.label

  return (
    <>
      <Head>
        <title>AthleticTag</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AthleticTagPageView tagName={tagName} clubs={mockClubList} />
    </>
  )
}

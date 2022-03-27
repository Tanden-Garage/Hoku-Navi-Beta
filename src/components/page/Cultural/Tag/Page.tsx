import Head from "next/head"
import { useRouter } from "next/router"

import { CULTURAL_TAG_ALL } from "@/constant/tag"
import { mockClubList } from "@/mocks/Club"

import { CulturalTagPageView } from "./View"

import type { NextPage } from "next"

export const CulturalTagPage: NextPage = () => {
  const router = useRouter()

  const path = router.asPath
  const label = CULTURAL_TAG_ALL.filter((tag) => tag.path === path)[0]?.label

  return (
    <>
      <Head>
        <title>CulturalTag</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CulturalTagPageView label={label} clubs={mockClubList} />
    </>
  )
}

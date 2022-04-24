import { useRouter } from "next/router"

import { MySEO } from "@/components/functional/SEO"
import { ATHLETIC_TAG_ALL } from "@/constant/tag"
import { mockClubList } from "@/mocks/Club"

import { AthleticTagPageView } from "./View"

import type { NextPage } from "next"

export const AthleticTagPage: NextPage = () => {
  const router = useRouter()

  const path = router.asPath // /athletic/[category]のこと
  const tagName = ATHLETIC_TAG_ALL.filter((tag) => tag.path === path)[0]?.label

  // TODO: Implement loading component
  if (!tagName) return <></>

  return (
    <>
      <MySEO
        path={path}
        title={`${tagName}の団体一覧`}
        description={`北海道大学の${tagName}の団体を探してみよう`}
      />

      <AthleticTagPageView tagName={tagName} clubs={mockClubList} />
    </>
  )
}

import { useRouter } from "next/router"

import { MySEO } from "@/components/functional/SEO"
import { CULTURAL_TAG_ALL } from "@/constant/tag"
import { mockClubList } from "@/mocks/Club"

import { CulturalTagPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const CulturalTagPage: NextPageWithLayout = () => {
  const router = useRouter()

  const path = router.asPath // /cultual/[category]のこと
  const tagName = CULTURAL_TAG_ALL.filter((tag) => tag.path === path)[0]?.label

  // TODO: Implement loading component
  if (!tagName) return <></>

  return (
    <>
      <MySEO
        path={path}
        title={`${tagName}の団体一覧`}
        description={`北海道大学の${tagName}の団体を探してみよう`}
      />

      <CulturalTagPageView tagName={tagName} clubs={mockClubList} />
    </>
  )
}

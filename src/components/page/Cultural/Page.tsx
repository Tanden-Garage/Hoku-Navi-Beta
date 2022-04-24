import { MySEO } from "@/components/functional/SEO"

import { CulturalPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const CulturalPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="/cultural"
        title="すべての文化系のタグ一覧"
        description="文化系団体のすべてのタグ一覧"
      />

      <CulturalPageView />
    </>
  )
}

import { TopPageView } from "@/components/page/Top/View"

import { MySEO } from "@/components/functional/SEO"

import type { NextPageWithLayout } from "next"

export const TopPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO path="/" noTitleTemplate />

      <TopPageView />
    </>
  )
}

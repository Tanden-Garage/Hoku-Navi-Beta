import { NextPageWithLayout } from "next"

import { TopPageView } from "@/components/page/Top/View"

import { MySEO } from "@/components/functional/SEO"

export const TopPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO path="/" noTitleTemplate />

      <TopPageView />
    </>
  )
}

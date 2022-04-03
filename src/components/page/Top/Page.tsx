import { NextPageWithLayout } from "next"

import { TopPageView } from "@/components/page/Top/View"
        
import { SEO } from "@/components/functional/SEO"

export const TopPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO path="/" noTitleTemplate />

      <TopPageView />
    </>
  )
}

import { TopPageView } from "@/components/page/Top/View"

import { SEO } from "@/components/functional/SEO"

import type { NextPage } from "next"

export const TopPage: NextPage = () => {
  return (
    <>
      <SEO path="/" />

      <TopPageView />
    </>
  )
}

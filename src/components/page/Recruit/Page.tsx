import { MySEO } from "@/components/functional/SEO"

import { RecruitPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const RecruitPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="/recruit"
        title="メンバー募集"
        description="北大部活サークルnaviに興味がある方を広く募集します。"
      />

      <RecruitPageView />
    </>
  )
}

import { MySEO } from "@/components/functional/SEO"

import { AthleticPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const AthleticPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="/athletic"
        title="すべての運動系のタグ一覧"
        description="運動系団体のすべてのタグ一覧"
      />

      <AthleticPageView />
    </>
  )
}

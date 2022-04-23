import { MySEO } from "@/components/functional/SEO"

import { PlivacyPolicyPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const PlivacyPolicyPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path=""
        title="plivacy policy"
        description="Write page description here."
      />

      <PlivacyPolicyPageView />
    </>
  )
}

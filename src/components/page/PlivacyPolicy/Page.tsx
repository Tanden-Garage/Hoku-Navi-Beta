import { MySEO } from "@/components/functional/SEO"

import { PlivacyPolicyPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const PlivacyPolicyPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="/privacy-policy"
        title="プライバシーポリシー"
        description="当サイトは、ご利用いただくお客様のプライバシーをお守りいたします。"
      />

      <PlivacyPolicyPageView />
    </>
  )
}

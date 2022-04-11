import { MySEO } from "@/components/functional/SEO"

import { ContactPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="/contact"
        title="お問い合わせ"
        description="サイトへのお問い合わせはこちらから"
      />

      <ContactPageView />
    </>
  )
}

import { MySEO } from "@/components/functional/SEO"
import { medSoccer } from "@/mocks/Club"

import { ClubIdPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const ClubIdPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        title={`${medSoccer.name} | 北大部活サークルnavi β`}
        description={`${medSoccer.name}の詳細ページ`}
        path={`/${medSoccer.id}`}
      />

      <ClubIdPageView club={medSoccer} />
    </>
  )
}

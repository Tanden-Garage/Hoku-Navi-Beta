import { useRouter } from "next/router"

import { MySEO } from "@/components/functional/SEO"

import { NotFoundPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const NotFoundPage: NextPageWithLayout = () => {
  const router = useRouter()

  const path = router.asPath

  return (
    <>
      <MySEO
        path=""
        title="Not found..."
        description="Sorry!お探しのページは見つかりませんでした。"
      />

      <NotFoundPageView path={path} />
    </>
  )
}

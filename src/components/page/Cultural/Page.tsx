import Head from "next/head"

import { CulturalPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const CulturalPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Cultural</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CulturalPageView />
    </>
  )
}

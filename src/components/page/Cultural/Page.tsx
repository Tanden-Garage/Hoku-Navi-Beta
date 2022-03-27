import Head from "next/head"

import { CulturalPageView } from "./View"

import type { NextPage } from "next"

export const CulturalPage: NextPage = () => {
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

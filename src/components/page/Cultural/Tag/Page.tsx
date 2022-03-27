import Head from "next/head"

import { CulturalTagPageView } from "./View"

import type { NextPage } from "next"

export const CulturalTagPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CulturalTag</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CulturalTagPageView />
    </>
  )
}

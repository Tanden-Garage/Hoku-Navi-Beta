import Head from "next/head"

import { AthleticTagPageView } from "./View"

import type { NextPage } from "next"

export const AthleticTagPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Athletic</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AthleticTagPageView />
    </>
  )
}

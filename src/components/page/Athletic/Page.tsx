import Head from "next/head"

import { AthleticPageView } from "./View"

import type { NextPage } from "next"

export const AthleticPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Athletic</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AthleticPageView />
    </>
  )
}
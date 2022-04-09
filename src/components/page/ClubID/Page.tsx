import Head from "next/head"

import { medSoccer } from "@/mocks/Club"

import { ClubIdPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const ClubIdPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>club</title>
        <meta name="description" content="Write page description here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClubIdPageView club={medSoccer} />
    </>
  )
}

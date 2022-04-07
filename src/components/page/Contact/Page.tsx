import Head from "next/head"

import { ContactPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactPageView />
    </>
  )
}
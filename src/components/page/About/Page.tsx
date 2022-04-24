import { MySEO } from "@/components/functional/SEO"

import { AboutPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="/about"
        title="このサイトについて"
        description="北大部活サークルnaviは北大生を中心とした部活やサークル、学生団体を紹介するため、2017年4月1日に開設されたウェブサイトです。"
      />

      <AboutPageView />
    </>
  )
}

import { 処理前 } from "@/utils/__test__/data"
import { convertToSakuin } from "@/utils/sakuin"

import { MySEO } from "@/components/functional/SEO"

import { SakuinPageView } from "./View"

import type { NextPageWithLayout } from "next"

export const SakuinPage: NextPageWithLayout = () => {
  // TODO モックデータをきちんと用意する
  const sakuin = convertToSakuin(処理前)

  return (
    <>
      <MySEO
        path="/all"
        title="団体さくいん"
        description="このサイトに掲載されているすべての団体が五十音順で並んでいます"
      />

      <SakuinPageView items={sakuin} />
    </>
  )
}

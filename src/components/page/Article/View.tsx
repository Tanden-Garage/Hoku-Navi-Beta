import InnerHTML from "dangerously-set-html-content"

import type { ArticleProps } from "@/types/Article"

import type { FC } from "react"

export const ArticlePageView: FC<ArticleProps> = ({ article }) => {
  return (
    <main className="flex flex-col justify-center items-center p-4 min-h-screen">
      <InnerHTML className="m-auto max-w-2xl prose" html={article.contents} />
    </main>
  )
}

import { ReactChild, useEffect, useState, VFC } from "react"

import type { Article } from "@/types/Article"

import { MySEO } from "@/components/functional/SEO"
import { client } from "@/lib/client"
import { mockArticle } from "@/mocks/Article"

import { ArticlePageView } from "./View"

import type { NextPageWithLayout } from "next"

const fetchArticle = async () =>
  await client.get<Article>({
    endpoint: "article",
    contentId: "dlumd_n8awt3",
  })

export const ArticlePage: NextPageWithLayout = () => {
  const [article, setArticle] = useState<Article>(mockArticle)

  useEffect(() => {
    fetchArticle().then((res) => {
      console.log(res)
      setArticle(res)
    })
  })

  return (
    <>
      <MySEO
        path=""
        title="article"
        description="Write page description here."
      />

      <LoadingContainer isLoading={article.id === mockArticle.id}>
        <ArticlePageView article={article} />
      </LoadingContainer>
    </>
  )
}

interface LoadingContainerProps {
  isLoading: boolean
  children: ReactChild
}

export const LoadingContainer: VFC<LoadingContainerProps> = ({
  isLoading,
  children,
}) => {
  return <>{isLoading ? "Loading..." : children}</>
}

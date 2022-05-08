import type { Rensai } from "./Rensai"

export type Article = {
  id: string
  publishedAt: Date
  parent: Rensai
  order: number
  title: string
  contents: string
}

export interface ArticleProps {
  article: Article
}

export interface ArticleListProps {
  articles: Article[]
}

import type { Article } from "@/types/Article"

import { mockRensai } from "./Rensai"

export const mockArticle: Article = {
  id: "",
  publishedAt: new Date(),
  parent: mockRensai,
  order: 0,
  title: "",
  contents: "",
}

export const mockArticleList = [mockArticle, mockArticle, mockArticle]

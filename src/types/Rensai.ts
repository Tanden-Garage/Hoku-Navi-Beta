import type { Article } from "./Article"
import type { Club } from "./Club"

export type Rensai = {
  id: string
  publishedAt: Date
  title: string
  thumbnail: Thumbnail
  description: string
  cooperate: Club[]
  articles: Article[]
}

export interface RensaiProps {
  rensai: Rensai
}

export interface RensaiListProps {
  rensais: Rensai[]
}

export interface Thumbnail {
  url: string
  height: number
  width: number
}

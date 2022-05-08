import type { Rensai, Thumbnail } from "@/types/Rensai"

const mockThumbnail: Thumbnail = {
  url: "https://images.microcms-assets.io/assets/ce14ee4b88d6401ab537598beb8ff6a8/e68502ff436a437bb324ea05899ae993/photo02-01.webp",
  height: 0,
  width: 0,
}

export const mockRensai: Rensai = {
  id: "",
  publishedAt: new Date(),
  title: "",
  thumbnail: mockThumbnail,
  description: "",
  cooperate: [],
  articles: [],
}

export const mockRensaiList = [mockRensai, mockRensai, mockRensai]

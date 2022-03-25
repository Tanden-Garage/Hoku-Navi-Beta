import { Schedule } from "@/types/Schedule"

// 画像のリンクはidより生成できる
export type Club = {
  id: string
  name: string
  lastUpdateAt: Date
  path: string
  introduction: string
  isCertificatedByUni: boolean
  isCertificatedByMed: boolean
  isCertificatedByDen: boolean
  isCertificatedByEng: boolean
  isCertificatedByLaw: boolean
  size: number
  establishedYear: number | null
  activityBase: string
  activityFrequency: string
  siteUrl: string | null
  mail: string | null
  fee: number | null
  conditionOfAdmission: string
  line: string | null
  twitter: string | null
  facebook: string | null
  instagram: string | null
  schedule: Schedule
  info: string
}

export interface ClubProps {
  club: Club
}

export interface ClubListProps {
  clubs: Club[]
}

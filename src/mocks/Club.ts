import type { Club } from "@/types/Club"

import { mockSchedule } from "@/mocks/Schedule"

const medSoccerIntro = `
北大医学部サッカー部は、現在、プレイヤー20名、マネージャー4名で活動しています！練習は週に4回、北大構外の河川敷やサッカー場で行っています。現在、学生リーグ2部に所属しており、『1部昇格』を目指して日々練習に励んでいます！

多くの部員が勉強やバイトと両立しながら部活をしています。比較的練習頻度は高めですが、その分、部員同士の仲が良く密な人間関係を築くことが出来ます！同じ学部の先輩がいるので、授業・実習・就活について聞きやすく、実習期間に対しての配慮もあるので安心です！

【練習日程】
・シーズン中(4月〜10月)
火曜、水曜、金曜：17時〜19時
土曜：9時〜11時
・オフシーズン中(12月〜2月)
月曜、水曜、木曜：17時〜19時
土曜：9時〜11時

【マネージャー紹介】
・仕事内容：タイムキープ、テーピング、練習に使うコーンの配置など
・日々真剣に練習に励むプレーヤーを支える仕事はとてもやり甲斐があります！マネ未経験でも大丈夫！先輩マネが優しく教えてくれますよ！
`

export const medSoccer: Club = {
  id: "fa1a913614384549888a",
  name: "北大医学部サッカー部",
  lastUpdateAt: new Date(2021, 9, 3),
  path: "hokuisoccer",
  introduction: medSoccerIntro,
  isCertificatedByUni: false,
  isCertificatedByMed: true,
  isCertificatedByDen: false,
  isCertificatedByEng: false,
  isCertificatedByLaw: false,
  size: 24,
  establishedYear: null,
  activityBase: "北大構外の河川敷やサッカー場",
  activityFrequency: "一週間に4回",
  siteUrl: "https://hokuisoccer.wixsite.com/hokuisoccer2015",
  mail: null,
  fee: null,
  conditionOfAdmission:
    "プレーヤーは北大医学科・保健学科から、マネージャーは大学、学部問わず募集中！",
  line: null,
  twitter: "hokuisoccer2017",
  instagram: null,
  facebook: "Hokkaido.Univ.Med.Football",
  schedule: mockSchedule,
  info: "★印の大会以外に、5〜10月に渡ってリーグ戦が実施されます。オフ期間は、東医体後（8月）・リーグ戦終了後（11月）・春休み時期（3月）になることが多いです。 プレイヤー・マネージャー共に年中募集中！Twitterで新歓情報を更新しているので、興味を持ってくれた方はDMまで✉",
}

export const mockClubList = [medSoccer, medSoccer, medSoccer]

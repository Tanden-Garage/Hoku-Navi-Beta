import { ClubItem, Gojuon } from "@/utils/sakuin"

export const 処理前: ClubItem[] = [
  {
    name: "北大サッカー部",
    yomi: "ほくだいさっかーぶ",
    path: "/athletic/soccer",
  },
  {
    name: "北大フットサル部",
    yomi: "ほくだいふっとさるぶ",
    path: "/athletic/footsul",
  },
  {
    name: "北大医学部サッカー部",
    yomi: "ほくだいいがくぶさっかーぶ",
    path: "/athletic/med-soccer",
  },
  {
    name: "北海道大学歯学部サッカー部",
    yomi: "ほっかいどうだいがくしがくぶさっかーぶ",
    path: "/athletic/teeth-soccer",
  },
  {
    name: "らららサッカー部",
    yomi: "らららさっかーぶ",
    path: "/athletic/rarara-soccer",
  },
]

export const ほくだい除去後: ClubItem[] = [
  {
    name: "北大サッカー部",
    yomi: "さっかーぶ",
    path: "/athletic/soccer",
  },
  {
    name: "北大フットサル部",
    yomi: "ふっとさるぶ",
    path: "/athletic/footsul",
  },
  {
    name: "北大医学部サッカー部",
    yomi: "いがくぶさっかーぶ",
    path: "/athletic/med-soccer",
  },
  {
    name: "北海道大学歯学部サッカー部",
    yomi: "しがくぶさっかーぶ",
    path: "/athletic/teeth-soccer",
  },
  {
    name: "らららサッカー部",
    yomi: "らららさっかーぶ",
    path: "/athletic/rarara-soccer",
  },
]

export const sortedAndHokudaiRemovedItems = [
  {
    name: "北大医学部サッカー部",
    yomi: "いがくぶさっかーぶ",
    path: "/athletic/med-soccer",
  },
  {
    name: "北大サッカー部",
    yomi: "さっかーぶ",
    path: "/athletic/soccer",
  },
  {
    name: "北海道大学歯学部サッカー部",
    yomi: "しがくぶさっかーぶ",
    path: "/athletic/teeth-soccer",
  },
  {
    name: "北大フットサル部",
    yomi: "ふっとさるぶ",
    path: "/athletic/footsul",
  },
  {
    name: "らららサッカー部",
    yomi: "らららさっかーぶ",
    path: "/athletic/rarara-soccer",
  },
]

export const あ行とあ行以降 = [
  [
    {
      name: "北大医学部サッカー部",
      yomi: "いがくぶさっかーぶ",
      path: "/athletic/med-soccer",
    },
  ],
  [
    {
      name: "北大サッカー部",
      yomi: "さっかーぶ",
      path: "/athletic/soccer",
    },
    {
      name: "北海道大学歯学部サッカー部",
      yomi: "しがくぶさっかーぶ",
      path: "/athletic/teeth-soccer",
    },
    {
      name: "北大フットサル部",
      yomi: "ふっとさるぶ",
      path: "/athletic/footsul",
    },
    {
      name: "らららサッカー部",
      yomi: "らららさっかーぶ",
      path: "/athletic/rarara-soccer",
    },
  ],
]

type R = ReturnType<Gojuon>

export const 処理済み: R = {
  あ行: [
    {
      name: "北大医学部サッカー部",
      yomi: "いがくぶさっかーぶ",
      path: "/athletic/med-soccer",
    },
  ],
  か行: [],
  さ行: [
    {
      name: "北大サッカー部",
      yomi: "さっかーぶ",
      path: "/athletic/soccer",
    },
    {
      name: "北海道大学歯学部サッカー部",
      yomi: "しがくぶさっかーぶ",
      path: "/athletic/teeth-soccer",
    },
  ],
  た行: [],
  な行: [],
  は行: [
    {
      name: "北大フットサル部",
      yomi: "ふっとさるぶ",
      path: "/athletic/footsul",
    },
  ],
  ま行: [],
  や行: [],
  ら行: [
    {
      name: "らららサッカー部",
      yomi: "らららさっかーぶ",
      path: "/athletic/rarara-soccer",
    },
  ],
  わをん: [],
}

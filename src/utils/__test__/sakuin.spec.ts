import { ClubItem, Gojuon, removeHokudai, sliceByGojuon, sort } from "../sakuin"

// describe("removeHokudai() のテスト", () => {
//   it("ほくだい", () => {
//     expect(removeHokudai("ほくだいさっかーぶ")).toBe("さっかーぶ")
//   })

//   it("ほっかいどうだいがく", () => {
//     expect(removeHokudai("ほっかいどうだいがくさっかーぶ")).toBe("さっかーぶ")
//   })

//   it("なし", () => {
//     expect(removeHokudai("さっかーぶ")).toBe("さっかーぶ")
//   })
// })

const 処理前: ClubItem[] = [
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

const sortedAndHokudaiRemovedItems = [
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

type R = ReturnType<Gojuon>

const 処理済み: R = {
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

describe("removeHokudai()*sort() のテスト", () => {
  it("お願い", () => {
    const hokudaiRemovedItems = 処理前.map((item) => {
      return { ...item, yomi: removeHokudai(item.yomi) }
    })
    expect(sort(hokudaiRemovedItems)).toStrictEqual(
      sortedAndHokudaiRemovedItems
    )
  })
})

describe("sliceByGojuon() のテスト", () => {
  it("あ行", () => {
    expect(sliceByGojuon(処理前).あ行).toStrictEqual(処理済み.あ行)
  })
  it("か行", () => {
    expect(sliceByGojuon(処理前).か行).toStrictEqual(処理済み.か行)
  })
  it("さ行", () => {
    expect(sliceByGojuon(処理前).さ行).toStrictEqual(処理済み.さ行)
  })
  it("た行", () => {
    expect(sliceByGojuon(処理前).た行).toStrictEqual(処理済み.た行)
  })
  it("な行", () => {
    expect(sliceByGojuon(処理前).な行).toStrictEqual(処理済み.な行)
  })
  it("は行", () => {
    expect(sliceByGojuon(処理前).は行).toStrictEqual(処理済み.は行)
  })
  it("ま行", () => {
    expect(sliceByGojuon(処理前).ま行).toStrictEqual(処理済み.ま行)
  })
  it("や行", () => {
    expect(sliceByGojuon(処理前).や行).toStrictEqual(処理済み.や行)
  })
  it("ら行", () => {
    expect(sliceByGojuon(処理前).ら行).toStrictEqual(処理済み.ら行)
  })
  it("わをん", () => {
    expect(sliceByGojuon(処理前).わをん).toStrictEqual(処理済み.わをん)
  })
  // it("全部", () => {
  //   expect(sliceByGojuon(処理前)).toBe(処理済み)
  // })
})

describe("removeHokudai()*sort() のテスト", () => {
  it("これは通る", () => {
    const a = ["いがくぶ", "ふっとさる"]
    const b = a.findIndex(
      (item) => item[0].match(/[は-ほば-ぼぱ-ぽ]/u) !== null
    )

    expect(b).toStrictEqual(1)
    expect(a.slice(0, b)).toStrictEqual(["いがくぶ"])
  })
})

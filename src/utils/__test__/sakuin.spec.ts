import {
  findFirstClubOfGyou,
  pretreatment,
  removeHokudai,
  removeHokudaiFromList,
  sliceByGojuon,
  sliceByGyou,
} from "../sakuin"
import {
  sortedAndHokudaiRemovedItems,
  あ行とあ行以降,
  ほくだい除去後,
  処理前,
  処理済み,
} from "./data"

describe("removeHokudai()", () => {
  it("ほくだい", () => {
    expect(removeHokudai("ほくだいさっかーぶ")).toBe("さっかーぶ")
  })

  it("ほっかいどうだいがく", () => {
    expect(removeHokudai("ほっかいどうだいがくさっかーぶ")).toBe("さっかーぶ")
  })

  it("なし", () => {
    expect(removeHokudai("さっかーぶ")).toBe("さっかーぶ")
  })
})

describe("removeHokudaiFromList()", () => {
  it("リストの全アイテムに対してremoveHokudai()", () => {
    const hokudaiRemovedItems = removeHokudaiFromList(処理前)

    expect(hokudaiRemovedItems).toStrictEqual(ほくだい除去後)
  })
})

describe("pretreatment()", () => {
  it("ほくだいの除去+sort", () => {
    const treatedItems = pretreatment(処理前)

    expect(treatedItems).toStrictEqual(sortedAndHokudaiRemovedItems)
  })
})

describe("findFirstClubOfGyou()", () => {
  it("か行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const か行以降の最初の位置 = findFirstClubOfGyou(
      treatedItems,
      /[か-こが-ご]/u
    )

    expect(か行以降の最初の位置).toStrictEqual(-1)
  })

  it("さ行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const さ行以降の最初の位置 = findFirstClubOfGyou(
      treatedItems,
      /[さ-そざ-ぞ]/u
    )

    expect(さ行以降の最初の位置).toStrictEqual(1)
  })

  it("た行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const た行以降の最初の位置 = findFirstClubOfGyou(
      treatedItems,
      /[た-とだ-ど]/u
    )

    expect(た行以降の最初の位置).toStrictEqual(-1)
  })

  it("な行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const な行以降の最初の位置 = findFirstClubOfGyou(treatedItems, /[な-の]/u)

    expect(な行以降の最初の位置).toStrictEqual(-1)
  })

  it("は行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const は行以降の最初の位置 = findFirstClubOfGyou(
      treatedItems,
      /[は-ほば-ぼぱ-ぽ]/u
    )

    expect(は行以降の最初の位置).toStrictEqual(3)
  })

  it("ま行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const ま行以降の最初の位置 = findFirstClubOfGyou(treatedItems, /[ま-も]/u)

    expect(ま行以降の最初の位置).toStrictEqual(-1)
  })

  it("や行で始まる団体の最初のやつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const や行以降の最初の位置 = findFirstClubOfGyou(treatedItems, /[や-よ]/u)

    expect(や行以降の最初の位置).toStrictEqual(-1)
  })

  it("ら行で始まる団体の最初のらつを探す()", () => {
    const treatedItems = pretreatment(処理前)

    const ら行以降の最初の位置 = findFirstClubOfGyou(treatedItems, /[ら-ろ]/u)

    expect(ら行以降の最初の位置).toStrictEqual(4)
  })
})

describe("sliceByGyou()", () => {
  it("あ行とその他で分ける", () => {
    const treatedItems = pretreatment(処理前)
    const test = sliceByGyou(treatedItems, /[か-こが-ご]/)
    console.log({ treatedItems, test })

    expect(sliceByGyou(treatedItems, /[か-こが-ご]/)).toStrictEqual(
      あ行とあ行以降
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

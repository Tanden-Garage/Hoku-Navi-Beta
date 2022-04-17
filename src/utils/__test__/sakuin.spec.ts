import {
  pretreatment,
  removeHokudai,
  removeHokudaiFromList,
  convertToSakuin,
} from "../sakuin"
import {
  sortedAndHokudaiRemovedItems,
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

describe("convertToSakuin() のテスト", () => {
  it("あ行", () => {
    expect(convertToSakuin(処理前).あ行).toStrictEqual(処理済み.あ行)
  })
  it("か行", () => {
    expect(convertToSakuin(処理前).か行).toStrictEqual(処理済み.か行)
  })
  it("さ行", () => {
    expect(convertToSakuin(処理前).さ行).toStrictEqual(処理済み.さ行)
  })
  it("た行", () => {
    expect(convertToSakuin(処理前).た行).toStrictEqual(処理済み.た行)
  })
  it("な行", () => {
    expect(convertToSakuin(処理前).な行).toStrictEqual(処理済み.な行)
  })
  it("は行", () => {
    expect(convertToSakuin(処理前).は行).toStrictEqual(処理済み.は行)
  })
  it("ま行", () => {
    expect(convertToSakuin(処理前).ま行).toStrictEqual(処理済み.ま行)
  })
  it("や行", () => {
    expect(convertToSakuin(処理前).や行).toStrictEqual(処理済み.や行)
  })
  it("ら行", () => {
    expect(convertToSakuin(処理前).ら行).toStrictEqual(処理済み.ら行)
  })
  it("わをん", () => {
    expect(convertToSakuin(処理前).わをん).toStrictEqual(処理済み.わをん)
  })
  it("全部", () => {
    expect(convertToSakuin(処理前)).toStrictEqual(処理済み)
  })
})

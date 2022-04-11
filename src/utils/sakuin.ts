// 'ほくだい'または'ほっかいどうだいがく'を文字列から除く
export const removeHokudai = (name: string) =>
  name.replace(/ほくだい|ほっかいどうだいがく/i, "")

// 'ほくだい'または'ほっかいどうだいがく'を文字列から除く処理をすべての団体に施す
export const removeHokudaiFromList = (items: ClubItem[]) =>
  items.map((item) => {
    return { ...item, yomi: removeHokudai(item.yomi) }
  })

// 五十音順にソート
export const sort = (items: ClubItem[]) =>
  items.sort((a, b) => a.yomi.localeCompare(b.yomi, "ja"))

// ほくだいの除去+sort
export const pretreatment = (items: ClubItem[]) => {
  const hokudaiRemovedItems = removeHokudaiFromList(items)
  const treatedItems = sort(hokudaiRemovedItems)

  return treatedItems
}

// ◯行で始まる団体の最初のやつを探す
export const findFirstClubOfGyou = (sortedItems: ClubItem[], regExp: RegExp) =>
  sortedItems.findIndex((item) => item.yomi[0].match(regExp) !== null)

// 渡されたリストを◯行だけの配列と○行以降の配列に分ける
export const sliceByGyou = (items: ClubItem[], regExp: RegExp) => {
  const firstItemOfGyou = findFirstClubOfGyou(items, regExp)
  const sliceIndex = firstItemOfGyou === -1 ? 0 : firstItemOfGyou
  const [gyou, afterGyou] = [
    items.slice(0, sliceIndex + 1),
    items.slice(sliceIndex + 1),
  ]

  return [gyou, afterGyou]
}

// あ行、か行...ごとのかたまりにする
export type ClubItem = { name: string; yomi: string; path: string }
export type Gojuon = (items: ClubItem[]) => {
  あ行: ClubItem[]
  か行: ClubItem[]
  さ行: ClubItem[]
  た行: ClubItem[]
  な行: ClubItem[]
  は行: ClubItem[]
  ま行: ClubItem[]
  や行: ClubItem[]
  ら行: ClubItem[]
  わをん: ClubItem[]
}

export const sliceByGojuon: Gojuon = (items) => {
  const treatedItems = pretreatment(items)

  const [あ行, あ行以降] = sliceByGyou(treatedItems, /[か-こが-ご]/u)
  const [か行, か行以降] = sliceByGyou(あ行以降, /[さ-そざ-ぞ]/u)
  const [さ行, さ行以降] = sliceByGyou(か行以降, /[た-とだ-ど]/u)
  const [た行, た行以降] = sliceByGyou(さ行以降, /[な-の]/u)
  const [な行, な行以降] = sliceByGyou(た行以降, /[は-ほば-ぼぱ-ぽ]/u)
  const [は行, は行以降] = sliceByGyou(な行以降, /[ま-も]/u)
  const [ま行, ま行以降] = sliceByGyou(は行以降, /[や-よ]/u)
  const [や行, や行以降] = sliceByGyou(ま行以降, /[ら-ろ]/u)
  const [ら行, わをん] = sliceByGyou(や行以降, /[わ-ん]/u)

  return {
    あ行,
    か行,
    さ行,
    た行,
    な行,
    は行,
    ま行,
    や行,
    ら行,
    わをん,
  } as const
}

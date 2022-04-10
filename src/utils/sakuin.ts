// 'ほくだい'または'ほっかいどうだいがく'を文字列から除く
export const removeHokudai = (name: string) =>
  name.replace(/ほくだい|ほっかいどうだいがく/i, "")

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

export const sort = (item: ClubItem[]) =>
  item.sort((a, b) => a.yomi.localeCompare(b.yomi, "ja"))

export const sliceByGojuon: Gojuon = (items) => {
  const hokudaiRemovedItems = items.map((item) => {
    return { ...item, yomi: removeHokudai(item.yomi) }
  })

  const sortedAndHokudaiRemovedItems = sort(hokudaiRemovedItems)

  const あ行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[か-こが-ご]/u) !== null
  )
  const か行始まり = あ行おわり === -1 ? 0 : あ行おわり
  const [あ行, あ行以降] = [
    sortedAndHokudaiRemovedItems.slice(0, か行始まり),
    sortedAndHokudaiRemovedItems.slice(か行始まり),
  ]

  const か行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[さ-そざ-ぞ]/u) !== null
  )
  const さ行始まり = か行おわり === -1 ? 0 : か行おわり
  const [か行, か行以降] = [
    あ行以降.slice(0, さ行始まり),
    sortedAndHokudaiRemovedItems.slice(さ行始まり),
  ]

  const さ行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[た-とだ-ど]/u) !== null
  )
  const た行始まり = さ行おわり === -1 ? 0 : さ行おわり

  const [さ行, さ行以降] = [
    か行以降.slice(0, た行始まり),
    sortedAndHokudaiRemovedItems.slice(た行始まり),
  ]

  const た行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[な-の]/u) !== null
  )
  const な行始まり = た行おわり === -1 ? 0 : た行おわり

  const [た行, た行以降] = [
    さ行以降.slice(0, な行始まり),
    sortedAndHokudaiRemovedItems.slice(な行始まり),
  ]

  const な行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[は-ほば-ぼぱ-ぽ]/u) !== null
  )
  const は行始まり = な行おわり === -1 ? 0 : な行おわり

  const [な行, な行以降] = [
    た行以降.slice(0, は行始まり),
    sortedAndHokudaiRemovedItems.slice(は行始まり),
  ]

  const は行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[ま-も]/u) !== null
  )
  const ま行始まり = は行おわり === -1 ? 0 : は行おわり

  const [は行, は行以降] = [
    な行以降.slice(0, ま行始まり),
    sortedAndHokudaiRemovedItems.slice(ま行始まり),
  ]

  const ま行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[や-よ]/u) !== null
  )
  const や行始まり = ま行おわり === -1 ? 0 : ま行おわり

  const [ま行, ま行以降] = [
    は行以降.slice(0, や行始まり),
    sortedAndHokudaiRemovedItems.slice(や行始まり),
  ]

  const や行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[ら-ろ]/u) !== null
  )
  const ら行始まり = や行おわり === -1 ? 0 : や行おわり

  const [や行, や行以降] = [
    ま行以降.slice(0, ら行始まり),
    sortedAndHokudaiRemovedItems.slice(ら行始まり),
  ]

  const ら行おわり = sortedAndHokudaiRemovedItems.findIndex(
    (item) => item.yomi[0].match(/[わ-ん]/u) !== null
  )
  const わ行始まり = ら行おわり === -1 ? 0 : ら行おわり

  const [ら行, わをん] = [
    や行以降.slice(0, わ行始まり),
    sortedAndHokudaiRemovedItems.slice(わ行始まり),
  ]

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

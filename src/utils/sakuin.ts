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
export type Sakuin = ReturnType<Gojuon>

export const convertToSakuin: Gojuon = (items) => {
  const あ行: ClubItem[] = []
  const か行: ClubItem[] = []
  const さ行: ClubItem[] = []
  const た行: ClubItem[] = []
  const な行: ClubItem[] = []
  const は行: ClubItem[] = []
  const ま行: ClubItem[] = []
  const や行: ClubItem[] = []
  const ら行: ClubItem[] = []
  const わをん: ClubItem[] = []

  const treatedItems = pretreatment(items)

  treatedItems.forEach((item) => {
    if (/[あ-お]/.test(item.yomi.charAt(0))) あ行.push(item)
    if (/[か-こが-ご]/.test(item.yomi.charAt(0))) か行.push(item)
    if (/[さ-そざ-ぞ]/.test(item.yomi.charAt(0))) さ行.push(item)
    if (/[た-とだ-ど]/.test(item.yomi.charAt(0))) た行.push(item)
    if (/[な-の]/.test(item.yomi.charAt(0))) な行.push(item)
    if (/[は-ほば-ぼぱ-ぽ]/.test(item.yomi.charAt(0))) は行.push(item)
    if (/[ま-も]/.test(item.yomi.charAt(0))) ま行.push(item)
    if (/[や-よ]/.test(item.yomi.charAt(0))) や行.push(item)
    if (/[ら-ろ]/.test(item.yomi.charAt(0))) ら行.push(item)
    if (/[わ-ん]/.test(item.yomi.charAt(0))) わをん.push(item)
  })

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

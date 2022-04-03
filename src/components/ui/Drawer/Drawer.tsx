import { VFC } from "react"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

const SIDEBAR_ITEMS_UPPER = [
  { label: "運動系のすべてのタグ", href: "/athletic" },
  { label: "文化系のすべてのタグ", href: "/cultural" },
  { label: "掲載団体さくいん", href: "/all" },
]

const SIDEBAR_ITEMS_LOWER = [
  { label: "このサイトについて", href: "/about" },
  { label: "サイト運営団体について", href: "/my_id" }, //TODO: 正規のIDを入れる
  { label: "メンバー募集", href: "/recruite" },
  { label: "お問い合わせ", href: "/contact" },
]

export const Drawer: VFC = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay" />

      <ul className="overflow-y-auto p-4 w-60 menu bg-base-100 text-base-content">
        <Anchor href="/" className="text-xl normal-case btn btn-ghost">
          Logo
        </Anchor>
        <Spacer size={12} />

        {SIDEBAR_ITEMS_UPPER.map((item) => (
          <li key={item.href}>
            <Anchor href={item.href}>{item.label}</Anchor>
          </li>
        ))}

        <Spacer size={4} />

        {/* TODO: 検索結果ページに移動する */}
        <form>
          <input
            type="text"
            placeholder="団体名を検索"
            className="w-full max-w-xs input input-bordered"
          />
        </form>

        <Spacer size={12} />

        {SIDEBAR_ITEMS_LOWER.map((item) => (
          <li key={item.href}>
            <Anchor href={item.href}>{item.label}</Anchor>
          </li>
        ))}
      </ul>
    </div>
  )
}

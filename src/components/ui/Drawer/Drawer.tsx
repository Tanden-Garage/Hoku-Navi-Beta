import { Anchor } from "@/components/ui/Anchor"
import { SearchBar } from "@/components/ui/SearchBar"
import { Spacer } from "@/components/ui/Spacer"

import type { FC } from "react"

const SIDEBAR_ITEMS_UPPER = [
  { label: "運動系のすべてのタグ", href: "/athletic" },
  { label: "文化系のすべてのタグ", href: "/cultural" },
  { label: "掲載団体さくいん", href: "/all" },
]

const SIDEBAR_ITEMS_LOWER = [
  { label: "このサイトについて", href: "/about" },
  { label: "サイト運営団体について", href: "/my_id" }, //TODO: 正規のIDを入れる
  { label: "メンバー募集", href: "/recruit" },
  { label: "お問い合わせ", href: "/contact" },
]

export const Drawer: FC = () => {
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

        <SearchBar />

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

import { useState, VFC } from "react"

import type { ClubItem, Sakuin } from "@/utils/sakuin"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

type Key = keyof Sakuin

interface SakuinPageViewProps {
  items: Sakuin
}

export const SakuinPageView: VFC<SakuinPageViewProps> = ({ items }) => {
  const [currentKey, setCurrentKey] = useState<Key>("あ行")

  const handleClick = (key: Key) => setCurrentKey(key)

  const current: ClubItem[] = items[currentKey]

  return (
    <main className="flex flex-col p-4 mx-auto max-w-3xl h-screen prose">
      <Spacer size={4} />

      <h1>団体さくいん</h1>

      <div className="flex flex-wrap gap-4 justify-center mt-0.5 w-full lg:mt-0">
        {(Object.keys(items) as Key[]).map((key) => {
          const avater = key.slice(0, 1)

          // TODO: active時のデザイン決め
          const styleIsActive = key === currentKey ? "bg-info" : "bg-base-100"
          const iconIsActive = key === currentKey ? "🥸" : avater

          return (
            <div
              className={`shrink-0 border border-primary w-10 h-10 rounded-full ${styleIsActive}`}
              onClick={() => handleClick(key)}
              key={key}
            >
              <p className="m-0 text-3xl text-center align-middle">
                {iconIsActive}
              </p>
            </div>
          )
        })}
      </div>

      <Spacer size={8} />

      <h2 className="py-1 px-2 m-0 bg-info">{currentKey}</h2>

      <ul className="flex flex-wrap w-full">
        {current.length === 0 && <span>該当なし😢</span>}
        {current.map((club) => (
          <li key={club.name} className="w-1/2">
            <Anchor href={club.path} className="hover:underline">
              {club.name}
            </Anchor>
          </li>
        ))}
      </ul>

      <Spacer size={20} />
    </main>
  )
}

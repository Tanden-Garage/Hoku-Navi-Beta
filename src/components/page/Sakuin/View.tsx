import clsx from "clsx"
import { useState, VFC } from "react"

import type { Sakuin } from "@/utils/sakuin"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

type Key = keyof Sakuin

interface SakuinPageViewProps {
  items: Sakuin
}

export const SakuinPageView: VFC<SakuinPageViewProps> = ({ items }) => {
  const [currentKey, setCurrentKey] = useState<Key>("あ行")

  const current = items[currentKey]
  const itemOfCurrentKeyIsEmpty = current.length === 0

  const keys = Object.keys(items) as Key[]

  return (
    <main className="flex flex-col p-4 mx-auto max-w-3xl min-h-screen prose">
      <Spacer size={4} />

      <h1>団体さくいん</h1>

      <div className="flex flex-wrap gap-4 justify-center mt-0.5 w-full lg:mt-0">
        {keys.map((key) => {
          const hiragana = key.charAt(0)

          const onClick = () => setCurrentKey(key)

          return (
            <div
              className={clsx(
                "shrink-0 w-10 h-10 rounded-full border border-primary",
                key === currentKey ? "bg-primary" : "bg-base-100"
              )}
              onClick={() => onClick()}
              key={key}
            >
              <p
                className={clsx(
                  "m-0 text-3xl text-center align-middle",
                  key === currentKey ? "text-base-100" : "text-primary"
                )}
              >
                {hiragana}
              </p>
            </div>
          )
        })}
      </div>

      <Spacer size={8} />

      <h2 className="py-1 px-2 m-0 bg-info">{currentKey}</h2>

      <ul className="flex flex-wrap w-full">
        {itemOfCurrentKeyIsEmpty && <span>該当なし😢</span>}
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

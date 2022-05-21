import clsx from "clsx"
import { Dispatch, SetStateAction, useState, FC } from "react"

import type { Sakuin } from "@/utils/sakuin"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

type Key = keyof Sakuin

interface SakuinPageViewProps {
  items: Sakuin
}

export const SakuinPageView: FC<SakuinPageViewProps> = ({ items }) => {
  const [currentKey, setCurrentKey] = useState<Key>("あ行")

  const currentList = items[currentKey]
  const currentListIsEmpty = currentList.length === 0

  const keys = Object.keys(items) as Key[]

  return (
    <main className="flex flex-col p-4 mx-auto max-w-3xl min-h-screen prose">
      <Spacer size={4} />

      <h1>団体さくいん</h1>

      <Switcher
        keys={keys}
        currentKey={currentKey}
        setCurrentKey={setCurrentKey}
      />

      <Spacer size={8} />

      <h2 className="py-1 px-2 m-0 bg-info">{currentKey}</h2>

      <ul className="flex flex-wrap w-full">
        {currentListIsEmpty && <span>該当なし😢</span>}
        {currentList.map((club) => (
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

interface SwitcherProps {
  keys: Key[]
  currentKey: Key
  setCurrentKey: Dispatch<SetStateAction<Key>>
}

const Switcher: FC<SwitcherProps> = ({ keys, currentKey, setCurrentKey }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-0.5 w-full lg:mt-0">
      {keys.map((key) => {
        const hiragana = key.charAt(0)
        const onClick = () => setCurrentKey(key)

        const containerStyle = clsx(
          "shrink-0 w-10 h-10 text-3xl text-center align-middle rounded-full border cursor-pointer border-primary",
          key === currentKey
            ? "bg-primary text-base-100"
            : "bg-base-100 text-primary"
        )

        return (
          <div className={containerStyle} onClick={onClick} key={key}>
            {hiragana}
          </div>
        )
      })}
    </div>
  )
}

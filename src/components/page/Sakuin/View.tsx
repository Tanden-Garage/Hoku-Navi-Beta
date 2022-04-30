import type { Sakuin } from "@/utils/sakuin"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

import type { VFC } from "react"

interface SakuinPageViewProps {
  items: Sakuin
}

export const SakuinPageView: VFC<SakuinPageViewProps> = ({ items }) => {
  return (
    <main className="flex flex-col   p-4 mx-auto max-w-3xl prose">
      <Spacer size={16} />

      <h1>団体さくいん</h1>

      {Object.entries(items).map(([行, items]) => (
        <>
          <h2 className="py-1 px-2 bg-info">{行}</h2>
          <ul className="flex flex-wrap w-full">
            {items.length === 0 && <span>該当なし😢</span>}
            {items.map((item) => (
              <li key={item.name} className="w-1/2">
                <Anchor href={item.path} className="hover:underline">
                  {item.name}
                </Anchor>
              </li>
            ))}
          </ul>
        </>
      ))}

      <Spacer size={20} />
    </main>
  )
}

import type { ClubProps } from "@/types/Club"

import { Anchor } from "@/components/ui/Anchor"
import { Img } from "@/components/ui/Img"

import type { VFC } from "react"

const DUMMY_IMAGE = `https://images.microcms-assets.io/assets/ce14ee4b88d6401ab537598beb8ff6a8/50fff40d44c14ae3a8578c6ccaa8a35a/medSoccer.webp`
export const ClubCard: VFC<ClubProps> = ({ club }) => {
  const { path, name } = club

  return (
    <Anchor className="no-underline" href={`/${path}`}>
      <div className="w-80 border-2 shadow-xl card bg-base-100">
        <figure className="m-0 rounded-t-xl">
          <Img
            className="p-0 m-0 rounded-t-xl"
            src={DUMMY_IMAGE}
            width={400}
            height={300}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="m-0 card-title">{name}</h2>
          <p className="m-0">
            If a dog chews shoes whose shoes does he choose?
          </p>
        </div>
      </div>
    </Anchor>
  )
}

import type { ClubProps } from "@/types/Club"

import { Anchor } from "@/components/ui/Anchor"
import { Img } from "@/components/ui/Img"

import type { VFC } from "react"

export const ClubCard: VFC<ClubProps> = ({ club }) => {
  const { id, name } = club
  // https://hubcnavi.net/storage/orgs/eb16dc0b783842079f83/large.png
  const imgSrc = `https://hubcnavi.net/storage/orgs/${id}/large.png`

  return (
    <Anchor className="no-underline" href={`/${id}`}>
      <div className="w-80 border-2 shadow-xl card bg-base-100">
        <figure className="m-0 rounded-t-xl">
          <Img
            className="p-0 m-0 rounded-t-xl"
            src={imgSrc}
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

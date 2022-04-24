import { Anchor } from "@/components/ui/Anchor"

import type { VFC } from "react"

export const Header: VFC = () => {
  return (
    <div className="rounded-md shadow navbar bg-base-100">
      <div className="flex-1">
        <Anchor href="/" className="text-xl normal-case btn btn-ghost">
          Logo
        </Anchor>
      </div>

      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  )
}

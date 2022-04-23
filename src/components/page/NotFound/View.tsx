import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

import type { VFC } from "react"

interface NotFoundPageProps {
  path: string
}

export const NotFoundPageView: VFC<NotFoundPageProps> = ({ path }) => {
  return (
    <main className="flex flex-col items-center p-8">
      <div
        className="my-8 tooltip tooltip-open tooltip-warning"
        data-tip="Oops!"
      >
        <h1 className="text-9xl">404</h1>
      </div>

      <p className="text-xl">Sorry! お探しのページは見つかりませんでした😭</p>

      <Spacer size={12} />

      <p className="py-2 font-bold">Output 👀</p>

      <section className="max-w-[22rem] sm:max-w-full mockup-code">
        <pre data-prefix="1">
          <code>
            <span className="text-secondary">search</span> {path} in
            hubcnavi.net{"  "}
          </code>
        </pre>
        <pre data-prefix="2">
          <code>○ wait for now...</code>
        </pre>
        <pre data-prefix="3">
          <code>○ wait for now...</code>
        </pre>
        <pre data-prefix="4">
          <code>○ wait for now...</code>
        </pre>
        <pre
          data-prefix="5"
          className="block w-full bg-warning text-warning-content"
        >
          <code>404 warning! Page not found.</code>
        </pre>
      </section>

      <Spacer size={12} />

      <Anchor href="/" className="btn btn-warning">
        Topへ
      </Anchor>
    </main>
  )
}

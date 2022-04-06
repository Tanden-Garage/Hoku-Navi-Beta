---
name: "pc"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter page name"
  pathForComponentDir: "Please enter path in conmponents directory"
  pathForPagesDir: "Please enter path in pages directory"
---

# `src/pages/{{ inputs.pathForPagesDir }}/index.tsx`

```ts
import { {{ inputs.name | pascal }}Page } from "@/components/page/{{ inputs.pathForComponentDir }}"

import { Layout } from "@/components/layout"

{{ inputs.name | pascal }}Page.getLayout = (page) => <Layout>{page}</Layout>

export default TopPage
```

export default {{ inputs.name | pascal }}Page
```

# `src/components/page/{{ inputs.name | pascal }}/Page.tsx`

```tsx
import Head from "next/head"

import { {{ inputs.name | pascal }}PageView } from "./View"

import type { NextPageWithLayout } from "next"

export const {{ inputs.name | pascal }}Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{{ inputs.name }}</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <{{ inputs.name | pascal }}PageView />
    </>
  )
}
```

# `src/components/page/{{ inputs.name | pascal }}/View.tsx`

```tsx
import type { VFC } from "react"

export const {{ inputs.name | pascal }}PageView: VFC = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen">
      <h1>Hello world!</h1>
    </main>
  )
}
```

# `src/components/page/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { {{ inputs.name | pascal }}PageView } from "./View"

export default {
  title: "Page/{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }}PageView,
} as ComponentMeta<typeof {{ inputs.name | pascal }}PageView>;

const Template: ComponentStory<typeof {{ inputs.name | pascal }}PageView> = (args) => (
  <{{ inputs.name | pascal }}PageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}
```

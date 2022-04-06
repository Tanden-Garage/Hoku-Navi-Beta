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

# `src/components/page/{{ inputs.pathForComponentDir }}/index.ts`

```ts
import { {{ inputs.name | pascal }}Page } from "./Page"
export default {{ inputs.name | pascal }}Page
```

# `src/components/page/{{ inputs.pathForComponentDir }}/Page.tsx`

```tsx
import { MySEO } from "@/components/functional/SEO"


import { {{ inputs.name | pascal }}PageView } from "./View"

import type { NextPageWithLayout } from "next"

export const {{ inputs.name | pascal }}Page: NextPageWithLayout = () => {
  return (
    <>
      <MySEO
        path="{{ inputs.pathForPagesDir }}"
        title="{{ inputs.name }}"
        description="Write page description here."
      />

      <{{ inputs.name | pascal }}PageView />
    </>
  )
}
```

# `src/components/page/{{ inputs.pathForComponentDir }}/View.tsx`

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

# `src/components/page/{{ inputs.pathForComponentDir }}/{{ inputs.pathForComponentDir | pascal }}.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Layout } from "@/components/layout"

import { {{ inputs.name | pascal }}PageView } from "./View"

export default {
  title: "Page{{ inputs.pathForComponentDir }}",
  component: {{ inputs.name | pascal }}PageView,
} as ComponentMeta<typeof {{ inputs.name | pascal }}PageView>;

const Template: ComponentStory<typeof {{ inputs.name | pascal }}PageView> = (args) => (
  <Layout>
    <{{ inputs.name | pascal }}PageView {...args} />
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}
```

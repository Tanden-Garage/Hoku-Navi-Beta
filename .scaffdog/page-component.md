---
name: "pc"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name"
---

# `src/components/page/{{ inputs.name | pascal }}/index.ts`

```ts
import { {{ inputs.name | pascal }}Page } from "./Page"

import { Layout } from "@/components/layout"

{{ inputs.name | pascal }}Page.getLayout = (page) => <Layout>{page}</Layout>


export default {{ inputs.name | pascal }}Page
```

# `src/components/page/{{ inputs.name | pascal }}/Page.tsx`

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
import type { ComponentStory, ComponentMeta } from "@storybook/react"

import { Layout } from "@/components/layout"

import { {{ inputs.name | pascal }}PageView } from "./View"

export default {
  title: "Page/{{ inputs.name | pascal }}",
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

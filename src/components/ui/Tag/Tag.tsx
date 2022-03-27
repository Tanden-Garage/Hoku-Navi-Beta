import { VFC } from "react"

import { Anchor } from "@/components/ui/Anchor"

type Tag = {
  label: string
  path: string
}

interface TagProps {
  tag: Tag
}

export const Tag: VFC<TagProps> = ({ tag }) => {
  const { label, path } = tag

  return (
    <span className="h-6 text-base badge badge-primary badge-outline hover:border-primary-focus">
      <Anchor
        href={`/${path}`}
        className="hover:no-underline link link-primary link-hover"
      >
        {label}
      </Anchor>
    </span>
  )
}

interface TagListProps {
  tags: Tag[]
  label: string
}

export const TagList: VFC<TagListProps> = ({ tags, label }) => {
  return (
    <div className="prose">
      <h2>{label}</h2>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.path} />
        ))}
      </div>
    </div>
  )
}

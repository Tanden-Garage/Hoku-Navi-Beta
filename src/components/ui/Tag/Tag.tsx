import { Anchor } from "@/components/ui/Anchor"

import type { FC } from "react"

type Tag = {
  label: string
  path: string
}

interface TagProps {
  tag: Tag
}

export const Tag: FC<TagProps> = ({ tag }) => {
  const { label, path } = tag

  return (
    <span className="h-6 text-base badge badge-primary badge-outline hover:border-primary-focus">
      <Anchor
        href={path}
        className="hover:no-underline link link-primary link-hover"
      >
        {label}
      </Anchor>
    </span>
  )
}

interface TagListProps {
  tags: Tag[]
}

export const TagList: FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.path} />
      ))}
    </div>
  )
}

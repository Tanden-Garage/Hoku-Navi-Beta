import Link from "next/link"
import { VFC } from "react"

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
    <span className="py-2 px-4 rounded-full bg-base-200">
      <Link href={`/${path}`}>
        <a className="hover:no-underline link link-primary link-hover">
          {label}
        </a>
      </Link>
    </span>
  )
}

interface TagListProps {
  tags: Tag[]
}

export const TagList: VFC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.path} />
      ))}
    </div>
  )
}

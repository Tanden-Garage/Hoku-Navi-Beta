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
    <div>
      <Link href={`/${path}`}>
        <a>{label}</a>
      </Link>
    </div>
  )
}

interface TagListProps {
  tags: Tag[]
}

export const TagList: VFC<TagListProps> = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.path} />
      ))}
    </div>
  )
}

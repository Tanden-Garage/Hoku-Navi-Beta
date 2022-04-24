import Link from "next/link"

import type { ComponentProps, FC } from "react"

type AnchorTagProps = ComponentProps<"a">

interface AnchorProps extends AnchorTagProps {
  className?: string
}

export const Anchor: FC<AnchorProps> = ({ children, className, ...props }) => {
  const { href } = props
  const isInternal = href?.startsWith("/")
  const target = isInternal ? "_self" : "_blank"

  return (
    <Link href={href ?? "/404"}>
      <a
        {...props}
        target={target}
        rel="noopener noreferer"
        className={`link no-underline ${className}`}
      >
        {children}
      </a>
    </Link>
  )
}

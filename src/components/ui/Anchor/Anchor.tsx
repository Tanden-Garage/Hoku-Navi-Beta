import Link from "next/link"
import React from "react"
import { ComponentProps, FC } from "react"

type AnchorTagProps = ComponentProps<"a">

interface AnchorProps extends AnchorTagProps {
  className?: string
  isExtarnal?: boolean
}

export const Anchor: FC<AnchorProps> = ({
  children,
  className,
  isExtarnal = false,
  ...props
}) => {
  const { href } = props
  const target = isExtarnal ? "_blank" : "_self"

  return (
    <Link href={href ?? "/404"}>
      <a
        {...props}
        target={target}
        rel="noopener noreferer"
        className={`link ${className}`}
      >
        {children}
      </a>
    </Link>
  )
}

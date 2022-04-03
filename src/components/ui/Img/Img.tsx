import Image from "next/image"
import { VFC } from "react"

import type { ImageProps, ImageLoader } from "next/image"

const IS_DEV = process.env.NODE_ENV === "development"

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }

  const host = IS_DEV ? "localhost:3000" : "hoku-navi-beta.pages.dev"

  const imgSrc = src.startsWith("/") ? host + src : src

  return `https://image-optimization.vintagenavyblue09143353.workers.dev?width=${width}&quality=${quality}&image=${imgSrc}`
}

interface ImgProps extends ImageProps {
  alt: string
}

export const Img: VFC<ImgProps> = ({ alt, ...props }) => {
  if (IS_DEV) return <Image {...props} alt={alt} />

  return <Image {...props} loader={cloudflareLoader} alt={alt} />
}

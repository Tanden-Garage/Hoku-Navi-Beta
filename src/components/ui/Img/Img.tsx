import Image from "next/image"
import { VFC } from "react"

import type { ImageProps, ImageLoader } from "next/image"

const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src
}

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(",")
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}

interface ImgProps extends ImageProps {
  alt: string
}

export const Img: VFC<ImgProps> = ({ alt, ...props }) => {
  return <Image {...props} loader={cloudflareLoader} alt={alt} />
}

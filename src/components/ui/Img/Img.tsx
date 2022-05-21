import Image from "next/image"

import type { ImageProps, ImageLoader } from "next/image"
import type { FC } from "react"

// 画像はすべてmicroCMSから取得すること
const microCMSImageLoader: ImageLoader = ({ src, width }) =>
  `${src}?fm=webp&w=${width}`

interface ImgProps extends ImageProps {
  alt: string
}

export const Img: VFC<ImgProps> = ({ alt, ...props }) => {
  return <Image {...props} loader={microCMSImageLoader} alt={alt} />

}

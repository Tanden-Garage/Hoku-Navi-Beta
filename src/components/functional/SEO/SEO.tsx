import NextHeadSeo from "next-head-seo"
import { VFC } from "react"

interface SEOProps {
  path: string
  title?: string
  description?: string
  ogImageUrl?: string
  noindex?: boolean
  noTitleTemplate?: boolean
}

// TODO: 本番では正規のURLを入れて環境変数化する
const APP_ROOT_URL = "https://hoku-navi-beta.pages.dev"

const DEFAULT_TITLE = "北大部活サークルnavi"
const DEFAULT_DESCRIPTION =
  "北海道大学の学生を中心とした部活やサークル、学生団体の情報を分かりやすくお伝えするサイトです。多種多様な団体を掲載しています。"
const DEFAULT_OG_IMG = "/og.png"

export const MySEO: VFC<SEOProps> = ({
  path,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImageUrl = APP_ROOT_URL + DEFAULT_OG_IMG,
  noindex,
  noTitleTemplate,
}) => {
  const pageUrl = APP_ROOT_URL + path

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - 北大部活サークルnavi`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? "noindex, nofollow" : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: "article",
        siteName: "北大部活サークルnavi",
      }}
      twitter={{
        card: "summary_large_image",
      }}
      customLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
    />
  )
}

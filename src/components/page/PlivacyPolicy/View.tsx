import { Anchor } from "@/components/ui/Anchor"

import type { FC } from "react"

const GOOGLE_POLICY_LINK =
  "https://policies.google.com/technologies/partner-sites?hl=ja"

export const PlivacyPolicyPageView: FC = () => {
  return (
    <main className="flex flex-col items-center p-12 ">
      <div className="prose">
        <h1>プライバシーポリシー</h1>
        <p>
          北大部活サークルnavi(以下、当サイト)は、利用者の個人情報の重要性を理解し、その適正な収集、利用、保護を行うため、以下のプライバシーポリシーを定めます。
        </p>

        <h2>Cookieの使用について</h2>
        <ol>
          <li>
            当サイトではウェブサイトの利便性を向上させる目的で、Cookieを使用し閲覧状況などの情報を収集する場合があります。このデータは利用者個人を特定・追跡するものではありません。
          </li>
          <li>
            多くのブラウザではデフォルトでCookieが利用されるように設定されていますが、利用者はCookieの受け入れ時に警告を表示したり、拒否するようにブラウザの設定を変更することが可能です。
          </li>
        </ol>

        <h2>アクセス解析について</h2>
        <ol>
          <li>
            当サイトではアクセス解析を目的としてGoogle
            Analyticsを利用しています。
          </li>
          <li>
            アクセス解析で用いられるデータは利用者個人を特定しない形で記録されます。詳しくは
            <Anchor href={GOOGLE_POLICY_LINK} className="text-primary">
              Googleポリシーと規約
            </Anchor>
            をご覧ください。
          </li>
        </ol>

        <h2>文責および著作権</h2>
        <ol>
          <li>
            各団体のページにおける文責および画像の著作権は各団体に帰属します。
          </li>
          <li>
            著作権法により認められる場合を除き、許諾を得ることなく当サイトの内容を複製、改変、無断転載等する行為は著作権法により禁止されています。
          </li>
          <li>
            当サイトからリンクされている第三者のサイトに関して、リンク先ページに起因するあらゆる問題について当サイトが責任を負うものではありません。
          </li>
          <li>
            予告なしに当サイトの情報を変更、および公開を中断することがあります。
          </li>
        </ol>

        <h2>免責事項</h2>
        <ol>
          <li>
            当サイトでは情報の正確性に注意を払っていますが、掲載された内容に関しその正確性を保証するものではありません。利用者本人の責任においてご利用頂くものとします。また、当サイトは北大の部活やサークルを網羅しているものではありません。
          </li>
          <li>
            当サイトからリンクされている第三者のサイトに関して、リンク先ページに起因するあらゆる問題について当サイトが責任を負うものではありません。
          </li>
          <li>
            予告なしに当サイトの情報を変更、および公開を中断することがあります。
          </li>
        </ol>
        <h2>プライバシーポリシーの変更について</h2>
        <ol>
          <li>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
          </li>
          <li>
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </li>
        </ol>
      </div>
    </main>
  )
}

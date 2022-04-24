import { Anchor } from "@/components/ui/Anchor"

import type { VFC } from "react"

export const AboutPageView: VFC = () => {
  return (
    <main className="p-12 mx-auto prose">
      <h1>このサイトについて</h1>
      <p>
        北大部活サークルnavi(以下、当サイト)は北大生を中心とした部活やサークル、学生団体を紹介するため、2017年4月1日に開設されたウェブサイトです。
      </p>
      <p>
        情報の正確性や各団体の意思を尊重するため、各団体よりご提供いただいた情報のみを掲載しています。掲載をご希望の団体は
        <Anchor href="/contact" className="text-primary">
          お問い合わせ
        </Anchor>
        よりご連絡いただけると幸いです。
      </p>

      <h2>管理・運営</h2>
      <p>
        当サイトの管理および運営は北大生の有志が行っております。当サイトとその運営団体である
        <Anchor href="/" className="text-primary">
          北大部活サークルnavi
        </Anchor>
        はいかなる組織や団体にも属しておらず、北海道大学が公認するものではありません。
      </p>
      <p>
        開発や運営を支えてくれる北大生をいつでも歓迎します。詳しくは
        <Anchor href="/recruit" className="text-primary">
          メンバー募集
        </Anchor>
        のページをご覧ください。
      </p>

      <h2>目的</h2>
      <h3>部活やサークルを探しやすくすること</h3>
      <p>
        さまざまな媒体に分散している部活やサークル等の情報を一か所に集め、体系的にまとめることで多くの団体の情報を効率的に知ることができます。
      </p>

      <h3>多様な団体を知ってもらうこと</h3>
      <p>
        団体のページへのリンクをランダムに掲載することで、団体の規模や歴史にかかわらず、いろいろな団体が目に留まる機会を増やします。
      </p>

      <h3>新たな広報手段を提供すること</h3>
      <p>
        新入生と各団体が直接交流する従来の新歓活動に加えて、当サイトを通じた新たな広報手段を提供します。
      </p>

      <h2>著作権・免責事項</h2>
      <p>
        当サイトにおける著作権・免責事項は
        <Anchor href="/privacy-policy" className="text-primary">
          プライバシーポリシー
        </Anchor>
        のページに記載しております。
      </p>
    </main>
  )
}

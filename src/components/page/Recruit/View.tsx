import { ErrorMessage } from "@hookform/error-message"
import clsx from "clsx"
import { useState, VFC } from "react"
import { useForm } from "react-hook-form"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

export const defaultValues = {
  contacterName: "",
  email: "",
  date1: null,
  date2: null,
  date3: null,
}

export type FormValues = typeof defaultValues

export const RecruitPageView: VFC = () => {
  const [isModalOn, setIsModalOn] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  })

  const onSubmit = () => {
    // ここでPOSTを行う
    setIsModalOn(true)
  }

  const modalOff = () => {
    reset(defaultValues)
    setIsModalOn(false)
  }

  const Label: VFC<{ labelText: string; name: string; required?: boolean }> = ({
    labelText,
    name,
    required = true,
  }) => {
    return (
      <label className="label">
        <span
          className={clsx(
            "label-text",
            required && "after:content-['*']  after:text-error"
          )}
        >
          {labelText}
        </span>
        <span className="label-text text-info-content">
          <ErrorMessage errors={errors} name={name} />
        </span>
      </label>
    )
  }

  return (
    <main className="flex flex-col items-center p-12">
      <div className="prose">
        <h1>運営メンバー募集</h1>
        <p>
          このサイトでは開発や運営を支えてくれる方を募集しています。プログラミングの経験や文系・理系は問いません。ものづくりがしたい方からサークル探しのお手伝いがしたい方まで、このサイトに興味がある方を広く募集します。
        </p>

        <h2>こんな人に来てほしい！</h2>
        <p>
          この北大部活サークルnaviはプログラミングして作られているため、めんばーの大半がエンジニアとして活躍しています。ですが、プログラミング以外の仕事もたくさんあり、エンジニア以外の役割を担ってくれる人も広く募集しています。
        </p>
        <p>
          下記にチームで活躍する役割として２つの例を示しました。もちろん例に縛られる必要はありませんが、参加希望の際にはどちらがなりたい姿に近いのかを伝えていただくと、スムーズに活躍していただけると思います。
        </p>

        <h3>エンジニアロール</h3>
        <ul>
          <p className="mb-2 -ml-8">【must条件】</p>
          <li>PCを持っていること</li>

          <p className="mb-2 -ml-8">【want条件】</p>
          <li>チームでものづくりがしたい人</li>
          <li>サークル探しのお手伝いがしたい人</li>

          <p className="mb-2 -ml-8">【その他】</p>
          <li>プログラミングの経験がなくてもOKです</li>
        </ul>

        <h3>プロダクトマネージャーロール</h3>
        <ul>
          <p className="mb-2 -ml-8">【must条件】</p>
          <li>PCを持っていること</li>
          <li>北大部活サークルnaviへの改善提案を考えることができる</li>

          <p className="mb-2 -ml-8">【want条件】</p>
          <li>ユーザーの声をキャッチし、チームに伝えることができる</li>
          <li>掲載団体と事務的なやりとりができる</li>
          <li>北大部活サークルnaviの魅力を発信できる</li>

          <p className="mb-2 -ml-8">【その他】</p>
          <li>プログラミングしなくてもOKです！</li>
        </ul>

        <h2>北大部活サークルnaviに参加するまでの流れ</h2>
        <p>
          基本的に誰でも参加可能ですが、ミスマッチを防ぐために、以下の流れにしたがって参加するかどうか決めていただいています。
        </p>

        <ol>
          <li>下のフォームからカジュアル面談申し込み</li>
          <li>zoomで代表（おもしろ担当）とカジュアル面談</li>
          <li>金曜夜の定例ミーティングを体験</li>
          <li>正式参加決定！</li>
        </ol>

        <h2>カジュアル面談申し込みフォーム</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center py-8 px-4 w-full rounded-2xl shadow-lg"
        >
          {FORM_PROPS.map((item) => (
            <div className="w-full" key={item.name}>
              <Label
                labelText={item.labelText}
                name={item.name}
                required={item.requierd}
              />
              <item.tag
                type={item.type}
                {...register(item.name, item.validationProps)}
                className={`w-full ${item.tag} ${item.tag}-bordered ${item.tag}-primary`}
              />
            </div>
          ))}

          <button type="submit" className="btn btn-secondary">
            送信する
          </button>
        </form>
      </div>

      {isModalOn && (
        <div
          onClick={modalOff}
          className="flex absolute top-0 left-0 justify-center items-center p-4 w-full h-screen bg-slate-100/70"
        >
          <div className="flex flex-col justify-center items-center p-4 w-full max-w-2xl h-1/2 bg-white rounded-xl">
            <h2 className="">ありがとうございます！</h2>

            <Spacer size={8} />

            <p>記入されたアドレス宛に確認メールが届きます</p>
            <p>返信は３日以内にいたします。</p>
            <p>今しばらくお待ち下さい</p>

            <Spacer size={8} />
            <Anchor href="/" className="btn btn-secondary">
              Topページへ
            </Anchor>
          </div>
        </div>
      )}
    </main>
  )
}

const CONTACTER_NAME_VALIDATION_PROPS = {
  required: "書いてくれよ〜〜〜😱😱😱",
  maxLength: { value: 60, message: "最大で60文字までしか入力できません" },
}

const EMAIL_VALIDATION_PROPS = {
  required: "次はないぞ〜〜〜😡😡😡",
  maxLength: 60,
  pattern: {
    value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
    message: "メールアドレスの形式が不正です",
  },
}

const DATE_VALIDATION_PROPS = {
  required: "いつがいいんだい？👽👽👽",
}

const FORM_PROPS = [
  {
    name: "contacterName",
    labelText: "お名前",
    validationProps: CONTACTER_NAME_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
    type: "text",
  },
  {
    name: "email",
    labelText: "メールアドレス",
    validationProps: EMAIL_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
    type: "text",
  },
  {
    name: "date1",
    labelText: "zoom面談希望日時（30min）その1",
    validationProps: DATE_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
    type: "datetime-local",
  },
  {
    name: "date2",
    labelText: "zoom面談希望日時（30min）その2",
    validationProps: DATE_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
    type: "datetime-local",
  },
  {
    name: "date3",
    labelText: "zoom面談希望日時（30min）その3",
    validationProps: DATE_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
    type: "datetime-local",
  },
] as const

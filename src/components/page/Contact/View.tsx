import { FC, useState } from "react"
import { useForm, SubmitHandler, FieldError } from "react-hook-form"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

export const defaultValues = {
  contacterName: "",
  email: "",
  clubName: "",
  summary: "",
  contents: "",
}

type FormValues = typeof defaultValues

export const ContactPageView: FC = () => {
  const [isValid, setIsValid] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors, submitCount },
  } = useForm<FormValues>({
    defaultValues: defaultValues,
    mode: "onChange",
  })

  const errorMessenger = (error: FieldError | undefined) => {
    return submitCount !== 0 && error ? (
      <p className="text-error">入力エラーです</p>
    ) : (
      ""
    ) // 送信ボタンを押したあとにエラーメッセージを表示する
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ data })
    setIsValid(true)
  }

  return (
    <main className="flex flex-col justify-center items-center p-8  w-full">
      <Spacer size={4} />

      <div className="text-center prose">
        <h1>お問い合わせ</h1>
        <p>緑の枠線の項目は必須入力です</p>
      </div>

      <Spacer size={8} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center w-full"
      >
        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">お名前</span>
          </label>
          {errorMessenger(errors.contacterName)}
          <input
            {...register("contacterName", {
              required: true,
              maxLength: 60,
            })}
            className="w-full max-w-lg input input-bordered input-primary"
          />
        </div>

        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">メールアドレス</span>
          </label>
          {errorMessenger(errors.email)}
          <input
            {...register("email", {
              required: true,
              maxLength: 60,
              pattern: {
                value:
                  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                message: "メールアドレスの形式が不正です",
              },
            })}
            className="w-full max-w-lg input input-bordered input-primary"
          />
          <label className="label"></label>
        </div>

        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">団体名</span>
          </label>
          {errorMessenger(errors.clubName)}
          <input
            {...register("clubName", {
              required: false,
              maxLength: 60,
            })}
            className="w-full max-w-lg input input-bordered "
          />
        </div>

        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">お問い合わせの種類</span>
          </label>
          {errorMessenger(errors.summary)}
          <select
            {...register("summary", {
              required: true,
            })}
            className="w-full max-w-lg select select-primary"
          >
            <option disabled selected>
              該当するものを一つ選んでください
            </option>
            <option value="hopeToPublish">掲載希望</option>
            <option value="aboutWebsite">サイトについて</option>
            <option value="other">その他</option>
          </select>
          <span className="label-text-alt">
            「掲載希望」をお選びいただくと、フォームに記載のメールアドレス宛に団体ページ編集フォームをお送りします。
          </span>
        </div>

        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">お問い合わせ内容</span>
          </label>
          {errorMessenger(errors.contents)}
          <textarea
            {...register("contents", {
              required: true,
              maxLength: 3000,
            })}
            className="w-full max-w-lg textarea textarea-primary "
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          送信する
        </button>
      </form>

      {isValid && (
        <div className="flex absolute top-0 left-0 justify-center items-center p-4 w-full h-screen bg-primary/70">
          <div className="flex flex-col justify-center items-center p-4 w-full max-w-2xl h-1/2 bg-white rounded-xl">
            <div className="prose">
              <h2 className="">ありがとうございます！</h2>
            </div>

            <Spacer size={8} />

            <p>記入されたアドレス宛に確認メールが届きます</p>
            <p>返信は３日以内にいたします。</p>
            <p>今しばらくお待ち下さい</p>

            <Spacer size={8} />
            <Anchor href="/">
              <button className="btn btn-secondary">Topページへ</button>
            </Anchor>
          </div>
        </div>
      )}
      <Spacer size={12} />
    </main>
  )
}

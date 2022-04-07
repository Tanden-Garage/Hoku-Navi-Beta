import { VFC } from "react"
import { useForm } from "react-hook-form"

import { Spacer } from "@/components/ui/Spacer"

export const defaultValues = {
  contacterName: "北大太郎",
  mail: "test@com",
  clubName: "北海道大学〇〇部",
  summary: "掲載希望",
  contents: "北大部活サークルnaviさんに掲載させていただきたいです。",
}

type FormValues = typeof defaultValues

export const ContactPageView: VFC = () => {
  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: defaultValues,
    mode: "onChange",
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <main className="flex flex-col justify-center items-center p-8  w-full">
      <Spacer size={4} />

      <div className="text-center prose">
        <h1>お問い合わせ</h1>
      </div>

      <Spacer size={8} />

      <form
        onChange={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center w-full"
      >
        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">お名前</span>
          </label>
          <input
            {...register("contacterName")}
            className="w-full max-w-lg input input-bordered input-primary"
          />
        </div>
        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">メールアドレス</span>
          </label>
          <input
            {...register("mail")}
            className="w-full max-w-lg input input-bordered input-primary"
          />
          <label className="label"></label>
        </div>
        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">団体名</span>
          </label>
          <input
            {...register("clubName")}
            className="w-full max-w-lg input input-bordered input-primary"
          />
        </div>
        <div className="w-full max-w-lg">
          <label className="label">
            <span className="label-text">お問い合わせの種類</span>
          </label>
          <select
            {...register("summary")}
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
          <textarea
            {...register("contents")}
            className="w-full max-w-lg textarea textarea-primary "
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          送信する
        </button>
      </form>
    </main>
  )
}

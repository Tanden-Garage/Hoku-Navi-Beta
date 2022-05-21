import { ErrorMessage } from "@hookform/error-message"
import clsx from "clsx"
import { useState, FC } from "react"
import { useForm } from "react-hook-form"

import { Anchor } from "@/components/ui/Anchor"
import { Spacer } from "@/components/ui/Spacer"

import {
  FormValues,
  defaultValues,
  SUMMARY_VALIDATION_PROPS,
  FORM_PROPS,
} from "./data"

export const ContactPageView: FC = () => {
  const [isModalOn, setIsModalOn] = useState(false)

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  })

  const modalOff = () => {
    reset(defaultValues)
    setIsModalOn(false)
  }

  const Label: FC<{ labelText: string; name: string; required?: boolean }> = ({
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
    <main className="flex flex-col justify-center items-center p-8  w-full">
      <Spacer size={4} />

      <h1>お問い合わせ</h1>

      <Spacer size={8} />

      <form
        action="https://getform.io/f/9bc0f6e6-ed8d-4fb2-8753-3b015b7438d0"
        method="POST"
        className="flex flex-col gap-4 items-center w-full"
      >
        <div className="w-full max-w-lg">
          <Label labelText="お問い合わせの種類" name="summary" />
          <select
            {...register("summary", SUMMARY_VALIDATION_PROPS)}
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

        {FORM_PROPS.map((item) => (
          <div className="w-full max-w-lg " key={item.name}>
            <Label
              labelText={item.labelText}
              name={item.name}
              required={item.requierd}
            />
            <item.tag
              {...register(item.name, item.validationProps)}
              className={`w-full max-w-lg ${item.tag} ${item.tag}-bordered ${item.tag}-primary`}
            />
          </div>
        ))}

        <button type="submit" className="btn btn-secondary">
          送信する
        </button>
      </form>

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
      <Spacer size={12} />
    </main>
  )
}

export const defaultValues = {
  contacterName: "",
  email: "",
  clubName: "",
  summary: "",
  contents: "",
}

export type FormValues = typeof defaultValues

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

const CLUB_NAME_VALIDATION_PROPS = {
  maxLength: { value: 60, message: "最大で60文字までしか入力できません" },
}

export const SUMMARY_VALIDATION_PROPS = {
  required: "あなたはどーれ？😎😎😎",
}

const CONTENTS_VALIDATION_PROPS = {
  required: "ホンネキカセロ👽👽👽",
  maxLength: { value: 3000, message: "最大で3000文字までしか入力できません" },
}

export const FORM_PROPS = [
  {
    name: "contacterName",
    labelText: "お名前",
    validationProps: CONTACTER_NAME_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
  },
  {
    name: "email",
    labelText: "メールアドレス",
    validationProps: EMAIL_VALIDATION_PROPS,
    requierd: true,
    tag: "input",
  },
  {
    name: "clubName",
    labelText: "団体名",
    validationProps: CLUB_NAME_VALIDATION_PROPS,
    requierd: false,
    tag: "input",
  },
  {
    name: "contents",
    labelText: "お問い合わせ内容",
    validationProps: CONTENTS_VALIDATION_PROPS,
    requierd: true,
    tag: "textarea",
  },
] as const

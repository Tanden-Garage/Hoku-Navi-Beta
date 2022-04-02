import { VFC } from "react"

export const Hero: VFC = () => {
  return (
    <div
      className="h-60 hero"
      style={{
        backgroundImage:
          "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
      }}
    >
      <div className="bg-opacity/60 hero-overlay"></div>
      <div className="text-center prose hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-secondary">
            ここからはじめよう
            <br />
            君の大学生活
          </h1>
          <p className="mb-5 text-secondary">
            掲載された約100の団体から、大学生活の相棒を見つけよう
          </p>
        </div>
      </div>
    </div>
  )
}

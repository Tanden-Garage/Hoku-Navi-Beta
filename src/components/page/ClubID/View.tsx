import { AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { FaLine } from "react-icons/fa"
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

import { ClubProps } from "@/types/Club"

import { dateFormatter } from "@/utils/dayFormatter"

import { Schedule } from "@/components/model/Schedule/Schedule"

import { Anchor } from "@/components/ui/Anchor"
import { Img } from "@/components/ui/Img"
import { Spacer } from "@/components/ui/Spacer"

import type { VFC } from "react"

interface BadgeProps {
  isCertificatedByUni: boolean
  isCertificatedByMed: boolean
  isCertificatedByDen: boolean
  isCertificatedByEng: boolean
  isCertificatedByLaw: boolean
}

const Badges: VFC<BadgeProps> = (props) => {
  return (
    <div className="flex gap-2 max-w-sm">
      {props.isCertificatedByUni && (
        <div className="badge badge-primary badge-lg">全学公認</div>
      )}
      {props.isCertificatedByMed && (
        <div className="badge badge-primary badge-lg">医学部公認</div>
      )}
      {props.isCertificatedByDen && (
        <div className="badge badge-primary badge-lg">歯学部公認</div>
      )}
      {props.isCertificatedByEng && (
        <div className="badge badge-primary badge-lg">工学部公認</div>
      )}
      {props.isCertificatedByLaw && (
        <div className="badge badge-primary badge-lg">法学部公認</div>
      )}
    </div>
  )
}

export const ClubIdPageView: VFC<ClubProps> = ({ club }) => {
  const {
    id,
    name,
    lastUpdateAt,
    introduction,
    size,
    establishedYear,
    activityBase,
    activityFrequency,
    siteUrl,
    mail,
    fee,
    conditionOfAdmission,
    line,
    twitter,
    facebook,
    instagram,
    schedule,
    info,
    ...props
  } = club

  const hasSiteUrl = Boolean(siteUrl)
  const hasMail = Boolean(mail)
  const hasLine = Boolean(line)
  const hasTwitter = Boolean(twitter)
  const hasFacebook = Boolean(facebook)
  const hasInstagram = Boolean(instagram)

  const imgSrc = `https://hubcnavi.net/storage/orgs/${id}/large.png`

  const updateDay = dateFormatter(lastUpdateAt)

  const statData = (n: number | null) => (n !== null ? n : "？")

  return (
    <main className="flex flex-col items-center mx-auto max-w-3xl">
      <Spacer size={12} className="hidden md:block" />

      <Img
        width={1000}
        height={500}
        objectFit="cover"
        src={imgSrc}
        alt={name}
        className="rounded-none md:rounded-lg"
      />

      <div className="flex flex-col justify-center p-4 w-full ">
        <div className="flex justify-between items-center px-4 pt-4 w-full">
          <Badges {...props} />

          <p className="text-center">
            最終更新
            <br />
            {updateDay}
          </p>
        </div>

        <h1 className="py-2">{name}</h1>

        <p className="whitespace-pre-wrap">{introduction}</p>

        <h2 className="py-8 pb-6">きほん情報</h2>

        <div>
          <div className="w-full shadow stats stats-vertical md:stats-horizontal">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">設立年</div>
              <div className="stat-value">{statData(establishedYear)}年</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">人数</div>
              <div className="stat-value">{statData(size)}人</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">費用</div>
              <div className="stat-value">{statData(fee)}円</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>

        <Spacer size={4} />

        <div
          tabIndex={0}
          className=" shadow collapse-open collapse  bg-base-100 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">活動頻度</div>
          <div className="collapse-content">
            <p>{activityFrequency}</p>
          </div>
        </div>

        <Spacer size={4} />

        <div
          tabIndex={0}
          className="shadow collapse-open collapse  bg-base-100 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">活動場所</div>
          <div className="collapse-content">
            <p>{activityBase}</p>
          </div>
        </div>

        <Spacer size={4} />

        <div
          tabIndex={0}
          className="shadow collapse-open collapse bg-base-100 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">入部条件</div>
          <div className="collapse-content">
            <p>{conditionOfAdmission}</p>
          </div>
        </div>

        <h2 className="py-8 pb-6">各種リンク</h2>

        <ul className="flex-wrap justify-between py-2 w-full shadow menu bg-base-100 rounded-box menu-vertical sm:menu-horizontal">
          {hasMail && (
            <li className="w-56">
              <Anchor href={mail ?? ""} className="w-full" type="mail">
                <AiOutlineMail />
                {mail}
              </Anchor>
            </li>
          )}
          {hasLine && (
            <li className="w-56">
              <Anchor href={line ?? ""} className="w-full" type="mail">
                <FaLine />
                公式LINE
              </Anchor>
            </li>
          )}
          {hasTwitter && (
            <li className="w-56">
              <Anchor
                href={`https://twitter.com/${twitter}`}
                className="w-full"
              >
                <AiFillTwitterCircle />
                Twitter
              </Anchor>
            </li>
          )}
          {hasFacebook && (
            <li className="w-56">
              <Anchor
                href={`https://facebook.com/${facebook}`}
                className="w-full"
              >
                <BsFacebook />
                facebook
              </Anchor>
            </li>
          )}
          {hasInstagram && (
            <li className="w-56">
              <Anchor
                href={`https://www.instagram.com//${instagram}`}
                className="w-full"
              >
                <BsInstagram />
                Instagram
              </Anchor>
            </li>
          )}
          {hasSiteUrl && (
            <li className="w-56">
              <Anchor href={siteUrl ?? ""} className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                ホームページ
              </Anchor>
            </li>
          )}
        </ul>

        <h2 className="py-8 pb-6">年間スケジュール</h2>

        <Schedule schedule={schedule} />

        <Spacer size={8} />

        <p className="whitespace-pre-wrap">{info}</p>
      </div>

      <Spacer size={8} />

      {/* TODO: デスクトップ版のシェアボタン表示 */}
      <div className="flex fixed bottom-4 justify-evenly w-full md:hidden">
        <TwitterShareButton
          url={`https://hubcnavi.net/${id}`}
          hashtags={[`${name}`, `北大部活サークルnavi`]}
          title={`${name} | 北大部活サークルnavi`}
          via="hubcnavi"
        >
          <TwitterIcon round size={40} />
        </TwitterShareButton>

        <LineShareButton
          url={`https://hubcnavi.net/${id}`}
          title={`${name} | 北大部活サークルnavi`}
        >
          <LineIcon round size={40} />
        </LineShareButton>

        <FacebookShareButton
          url={`https://hubcnavi.net/${id}`}
          hashtag={`#${name}`}
          quote={"この団体キニナル！"}
        >
          <FacebookIcon round size={40} />
        </FacebookShareButton>
      </div>
    </main>
  )
}

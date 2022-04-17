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

import { mockSchedule } from "@/mocks/Schedule"

import type { VFC } from "react"

export const ClubIdPageView: VFC<ClubProps> = ({ club }) => {
  const {
    id,
    name,
    lastUpdateAt,
    path,
    introduction,
    isCertificatedByUni,
    isCertificatedByMed,
    isCertificatedByDen,
    isCertificatedByEng,
    isCertificatedByLaw,
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
  } = club

  const imgSrc = `https://hubcnavi.net/storage/orgs/${id}/large.png`

  const updateDay = dateFormatter(lastUpdateAt)

  const statData = (n: number | null) => (n !== null ? n : "？")

  return (
    <main>
      <div className="flex flex-col justify-center items-center px-0 w-full lg:px-80">
        <Spacer size={12} className="hidden lg:block" />

        <Img
          width={1000}
          height={500}
          objectFit="cover"
          src={imgSrc}
          alt={name}
          className="rounded-none lg:rounded-lg"
        />

        <Spacer size={12} />

        <div className="flex justify-between px-4 w-full">
          {/*TODO: 公認のブール値から表示できるようにする */}
          <div className="badge badge-primary badge-lg">医学部公認</div>{" "}
          <div className="prose">
            <p>最終更新日：{updateDay}</p>
          </div>
        </div>

        <Spacer size={12} />

        <div className="p-4 w-full lg:px-0">
          <div className="prose">
            <h1>{name}</h1>
          </div>

          <Spacer size={12} />

          <p>{introduction}</p>
        </div>

        <Spacer size={8} />

        <div className="p-4 w-full lg:px-0">
          <div className="prose">
            <h2>きほん情報</h2>
          </div>

          <Spacer size={4} />

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
        </div>

        <Spacer size={8} />

        <div className="p-4 w-full lg:px-0">
          <div className="prose">
            <h2>各種リンク</h2>
          </div>

          <Spacer size={4} />

          <ul className="p-2 w-full shadow menu bg-base-100 rounded-box menu-vertical lg:menu-horizontal">
            {twitter !== null && (
              <li className="grow">
                <Anchor
                  href={`https://twitter.com/${twitter}`}
                  className="w-full"
                >
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
                  Twitter
                </Anchor>
              </li>
            )}
            {facebook !== null && (
              <li className="grow">
                <Anchor
                  href={`https://facebook.com/${facebook}`}
                  className="w-full"
                >
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
                  facebook
                </Anchor>
              </li>
            )}
            {instagram !== null && (
              <li className="w-grow">
                <Anchor
                  href={`https://www.instagram.com//${instagram}`}
                  className="w-full"
                >
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
                  Instagram
                </Anchor>
              </li>
            )}
            {siteUrl !== null && (
              <li className="grow">
                <Anchor href={siteUrl} className="w-full">
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
        </div>

        <Spacer size={8} />

        <div className="p-4 w-full lg:px-0">
          <div className="prose">
            <h2>年間スケジュール</h2>
          </div>

          <Spacer size={8} />

          <Schedule schedule={mockSchedule} />
        </div>
      </div>

      <Spacer size={8} />

      {/* TODO: デスクトップ版のシェアボタン表示 */}
      <div className="flex fixed bottom-4 justify-evenly w-full lg:hidden">
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

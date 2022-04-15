import { VFC } from "react"

import { ScheduleProps } from "@/types/Schedule"

interface Props {
  month: string
  event: string
}

export const ScheduleItem: VFC<Props> = ({ month, event }) => {
  return (
    <div className="relative pl-5 h-36 border-l-2 last:border-base-100 border-secondary">
      <div className="inline-flex absolute  top-0 -left-1.5 w-2.5 h-2.5 rounded-full  border-2 border-primary  bg-primary"></div>
      <div className="absolute -top-2 left-5 prose-sm">
        <h3 className="text-md">{month}</h3>
      </div>
      <div className="absolute top-8 right-0 left-5 shadow-xl card bg-base-100">
        <div className="card-body">
          <p>{event}</p>
        </div>
      </div>
    </div>
  )
}

export const Schedule: VFC<ScheduleProps> = ({ schedule }) => {
  return (
    <div className="">
      {Object.entries(schedule).map(
        ([month, event]) =>
          event !== "" && (
            <>
              <ScheduleItem month={month} event={event} />
            </>
          )
      )}
    </div>
  )
}

import { VFC } from "react"

import { ScheduleProps } from "@/types/Schedule"

interface Props {
  month: string
  event: string
}

export const ScheduleItem: VFC<Props> = ({ month, event }) => {
  return (
    <div className="relative pl-5 h-36">
      <div className="inline-flex absolute  top-0 -left-1.5 w-2.5 h-2.5 rounded-full  border-2 border-primary  bg-primary" />
      <div className="absolute -top-2 left-5 prose-sm">
        <h3 className="text-md">{month}</h3>
      </div>
      <div className="flex absolute top-8 right-0 left-5 items-center p-8 rounded-xl shadow-2xl bg-base-100">
        <p>{event}</p>
      </div>
    </div>
  )
}

export const Schedule: VFC<ScheduleProps> = ({ schedule }) => {
  return (
    <div className="border-l-2  border-secondary">
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

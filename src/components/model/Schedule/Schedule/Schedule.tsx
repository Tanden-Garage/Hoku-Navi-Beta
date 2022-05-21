import type { ScheduleProps } from "@/types/Schedule"

import { Spacer } from "@/components/ui/Spacer"

import type { FC } from "react"

interface Props {
  month: string
  event: string
}

export const ScheduleItem: FC<Props> = ({ month, event }) => {
  return (
    <section className="relative pl-5">
      <div className="inline-flex absolute top-2.5 -left-1.5 w-2.5 h-2.5 rounded-full  border-2 border-primary  bg-primary" />
      <div className="left-5 prose">
        <h3 className="pb-2">{month}</h3>
      </div>
      <div className="flex items-center p-8 rounded-xl shadow bg-base-100">
        <p>{event}</p>
      </div>

      <Spacer size={8} />
    </section>
  )
}

export const Schedule: FC<ScheduleProps> = ({ schedule }) => {
  return (
    <article className="border-l-2  border-secondary">
      {Object.entries(schedule).map(
        ([month, event]) =>
          event !== "" && <ScheduleItem month={month} event={event} />
      )}
    </article>
  )
}

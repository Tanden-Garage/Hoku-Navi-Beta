export type Schedule = {
  Apr: string
  May: string
  Jun: string
  Jul: string
  Aug: string
  Sep: string
  Oct: string
  Nov: string
  Dec: string
  Jan: string
  Feb: string
  Mar: string
}

export interface ScheduleProps {
  schedule: Schedule
}

export interface ScheduleListProps {
  schedules: Schedule[]
}

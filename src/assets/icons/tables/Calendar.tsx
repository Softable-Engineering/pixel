// Types
import type React from 'react'

interface Props {
  color?: string
}

export const CalendarIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Calendar</title>
      <path
        d="M3.5 5.5H4.5V6.5H3.5V5.5ZM3.5 7.5H4.5V8.5H3.5V7.5ZM5.5 5.5H6.5V6.5H5.5V5.5ZM5.5 7.5H6.5V8.5H5.5V7.5ZM7.5 5.5H8.5V6.5H7.5V5.5ZM7.5 7.5H8.5V8.5H7.5V7.5Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M2.5 11H9.5C10.0515 11 10.5 10.5515 10.5 10V3C10.5 2.4485 10.0515 2 9.5 2H8.5V1H7.5V2H4.5V1H3.5V2H2.5C1.9485 2 1.5 2.4485 1.5 3V10C1.5 10.5515 1.9485 11 2.5 11ZM9.5 4L9.5005 10H2.5V4H9.5Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}

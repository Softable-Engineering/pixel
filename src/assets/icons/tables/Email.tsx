// Types
import type React from 'react'

interface Props {
  color?: string
}

export const EmailIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Email</title>
      <g>
        <path
          d="M6 0.975C3.24 0.975 1 3.215 1 5.975C1 8.735 3.24 10.975 6 10.975H8.5V9.975H6C3.83 9.975 2 8.145 2 5.975C2 3.805 3.83 1.975 6 1.975C8.17 1.975 10 3.805 10 5.975V6.69C10 7.085 9.645 7.475 9.25 7.475C8.855 7.475 8.5 7.085 8.5 6.69V5.975C8.5 4.595 7.38 3.475 6 3.475C4.62 3.475 3.5 4.595 3.5 5.975C3.5 7.355 4.62 8.475 6 8.475C6.69 8.475 7.32 8.195 7.77 7.74C8.095 8.185 8.655 8.475 9.25 8.475C10.235 8.475 11 7.675 11 6.69V5.975C11 3.215 8.76 0.975 6 0.975ZM6 7.475C5.17 7.475 4.5 6.805 4.5 5.975C4.5 5.145 5.17 4.475 6 4.475C6.83 4.475 7.5 5.145 7.5 5.975C7.5 6.805 6.83 7.475 6 7.475Z"
          fill={color ?? '#C7CFD8'}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_9">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

// Types
import type React from 'react'

interface Props {
  color?: string
}

export const ListIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>List</title>
      <path
        d="M2 3H3V4H2V3ZM2 5.5H3V6.5H2V5.5ZM2 8H3V9H2V8ZM10 4V3H4.0115V4H9.4H10ZM4 5.5H10V6.5H4V5.5ZM4 8H10V9H4V8Z"
        fill={color ?? '#C7CFD8'}
      />
    </svg>
  )
}

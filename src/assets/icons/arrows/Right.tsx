// Types
import type React from 'react'

interface Props {
  color?: string
}

export const Right: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Right Arrow</title>
      <path
        d="M10.7596 8.43187L7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.808C6.25 5.4221 6.66861 5.18167 7.00194 5.37611L10.7596 7.56809C11.0904 7.76103 11.0904 8.23893 10.7596 8.43187Z"
        fill={color || '#C7CFD8'}
      />
      <path
        d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.808C6.25 5.4221 6.66861 5.18167 7.00194 5.37611L10.7596 7.56809C11.0904 7.76103 11.0904 8.23893 10.7596 8.43187L7.00194 10.6239Z"
        fill={color ?? '#C7CFD8'}
      />
    </svg>
  )
}

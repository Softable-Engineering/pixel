// Types
import type React from 'react'

interface Props {
  color?: string
}

export const SigmaIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sigma</title>
      <path
        d="M12 4H5.88667L9.88667 8L5.88667 12H12V13.3333H4V12L8 8L4 4V2.66667H12V4Z"
        fill={color ?? '#C7CFD8'}
      />
    </svg>
  )
}

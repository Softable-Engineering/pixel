// Types
import type React from 'react'

interface Props {
  color?: string
}

export const CheckboxIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Checkbox</title>
      <path
        d="M3.5 2.5C3.23478 2.5 2.98043 2.60536 2.79289 2.79289C2.60536 2.98043 2.5 3.23478 2.5 3.5V8.5C2.5 8.76522 2.60536 9.01957 2.79289 9.20711C2.98043 9.39464 3.23478 9.5 3.5 9.5H8.5C8.76522 9.5 9.01957 9.39464 9.20711 9.20711C9.39464 9.01957 9.5 8.76522 9.5 8.5V3.5C9.5 3.23478 9.39464 2.98043 9.20711 2.79289C9.01957 2.60536 8.76522 2.5 8.5 2.5H3.5ZM5.5 7.707L4.1465 6.3535L4.8535 5.6465L5.5 6.293L7.3965 4.3965L8.1035 5.1035L5.5 7.707Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}

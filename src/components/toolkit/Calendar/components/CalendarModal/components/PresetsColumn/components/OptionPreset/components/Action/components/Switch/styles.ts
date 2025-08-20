import styled from 'styled-components'

interface ContainerProps {
  $checked: boolean
  $disabled?: boolean
}

interface ThumbProps {
  $checked: boolean
}

export const Container = styled.button<ContainerProps>`
  appearance: none;
  border: 0;
  outline: 0;
  padding: 0;
  width: 2rem;
  height: 1.25rem;
  border-radius: 999px;
  position: relative;
  background: ${({ $checked }) => ($checked ? 'var(--primary)' : '#D6D6D6')};
  transition: background 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.35);
  }
`

export const Thumb = styled.span<ThumbProps>`
  position: absolute;
  top: 3px;
  left: ${({ $checked }) => ($checked ? 'calc(2rem - 1.25rem + 6px - 3px)' : '3px')};
  width: calc(1.25rem - 6px);
  height: calc(1.25rem - 6px);
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: left 0.2s ease;
`

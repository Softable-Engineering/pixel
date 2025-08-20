import styled from 'styled-components'

interface ContainerPresetProps {
  $isLast: boolean
}

export const Container = styled.div`
  width: 10rem;

  border-radius: 0.5rem 0 0 0.5rem;

  border-right: 1px solid var(--border-color);
`

export const ContainerPreset = styled.div<ContainerPresetProps>`
  border-bottom: ${({ $isLast }) => (!$isLast ? '1px solid var(--border-color)' : null)};
`

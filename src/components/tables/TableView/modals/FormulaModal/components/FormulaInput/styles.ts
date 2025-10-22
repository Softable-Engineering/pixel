import { styled } from 'styled-components'
import { ScrollStyles } from '@components/tables/TableView/styles'

export const Container = styled.div`
  width: 100%;

  padding: 0 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  max-height: 15rem;

  padding: 0.5rem;

  overflow-x: hidden;

  font-family: Cereal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem !important;
  line-height: 1.25rem !important;

  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.text.primary};

  border: 1px solid var(--border-color);

  background-color: ${({ theme }) => theme.colors.background.primary};

  tab-size: 2;
  text-align: start;
  white-space: pre-wrap;
  word-break: break-all;

  vertical-align: middle;

  &:focus {
    outline-offset: -1px;
    outline: 1px solid var(--primary);
  }

  span {
    vertical-align: middle;
  }

  .column {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.25rem;
    border-radius: 0.125rem;
    background-color: ${({ theme }) => theme.colors.background.hover};

    color: ${({ theme }) => theme.colors.text.primary};

    .column-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 1rem;
      height: 1rem;
    }

    [contenteditable="true"] {
      caret-color: auto;
    }
  }

  .function {
    color: ${({ theme }) => theme.colors.primary};
  }

  .number {
    color: #d1949e;
  }

  .formula-error-underline {
    text-decoration: underline wavy red !important;
  }

  .string {
    color: #bde052;
  }

  .text {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .punctuation {
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.7;
  }

  .operator {
    color: #f5b83d;
  }

  ${ScrollStyles}

  &:empty::before {
    content: attr(data-placeholder);
    color: #aaa;
    pointer-events: none;
  }
`

import { rgba } from 'polished'
import styled from 'styled-components'

export const InputArea = styled.div`
  border-radius: 10rem;
  border: 2px solid ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  display: flex;
  gap: 0.5rem;
  height: 3rem;
  overflow: hidden;
  padding: 0 1rem;
  transition: 200ms border-color ease-out;
  width: 100%;

  & .icon {
    font-size: 1.5rem;
    height: 100%;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const Input = styled.input`
  border: none;
  font-size: 1rem;
  width: 100%;
`

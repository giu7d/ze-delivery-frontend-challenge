import { rgba } from 'polished'
import styled from 'styled-components'

export const Warning = styled.div`
  display: grid;
  grid-template-areas:
    'icon title'
    'icon content';
  padding: 2rem;
  gap: 0.5rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => rgba(theme.colors.dark, 0.1)};

  & > .warning-icon {
    grid-area: icon;
    margin-right: 2rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  & > .warning-title {
    grid-area: title;
    font-size: 1.5rem;
  }
  & > .warning-content {
    grid-area: content;
  }
`

import { rgba } from 'polished'
import styled from 'styled-components'

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 1rem;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05); */
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;

  & div:last-child {
    width: 100%;
  }
`

export const CardBadge = styled.div`
  align-items: flex-end;
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem 0.1rem;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  gap: 0.1rem;
  line-height: 1rem;
  padding: 0.75rem 1rem;
  position: absolute;
  text-transform: capitalize;

  small {
    font-size: 0.75rem;
  }
`

export const CardImage = styled.div`
  align-items: center;
  background: ${({ theme }) => rgba(theme.colors.dark, 0.05)};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  min-width: 35%;
  overflow: hidden;

  img {
    max-height: 150px;
  }
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;

  & .title {
    font-weight: 600;
    font-size: 1rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.dark};
  }

  & .description {
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.dark};
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardActions = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

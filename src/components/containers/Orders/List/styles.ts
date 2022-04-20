import { rgba } from 'polished'
import styled from 'styled-components'

export const OrdersListArea = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 6rem;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
    max-width: 800px;
    margin: auto;
  }
`

export const OrdersActionsArea = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  & > button {
    max-width: fit-content;
  }
`

export const OrdersCheckoutArea = styled.section`
  background: ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  bottom: 0;
  padding: 1rem 1rem 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 100;

  @media screen and (min-width: 992px) {
    display: flex;
    position: relative;
    max-width: 800px;
    z-index: 1;
    padding: 2rem;
    margin: auto;
    border: none;
    justify-content: flex-end;

    & > button {
      max-width: 40%;
    }
  }
`

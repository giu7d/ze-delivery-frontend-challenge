import { rgba } from 'polished'
import styled from 'styled-components'

export const ProductsListArea = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 6rem;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    padding: 1rem 2rem;
    max-width: 1000px;
    margin: auto;
    align-items: stretch;
    justify-content: space-between;

    & > div {
      flex: 0 1 50%;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 992px) {
    & > div {
      flex: 0 1 33%;
      justify-content: space-between;
    }
  }
`

export const ProductsCheckoutArea = styled.section`
  background: ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  bottom: 0;
  padding: 1rem 1rem 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 100;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

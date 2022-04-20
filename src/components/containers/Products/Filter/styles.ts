import styled from 'styled-components'

export const FilterArea = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
    max-width: 1000px;
    margin: auto;
  }

  @media screen and (min-width: 992px) {
    padding: 3rem 2rem 2rem;
  }
`

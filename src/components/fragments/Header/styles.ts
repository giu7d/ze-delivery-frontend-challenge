import styled from 'styled-components'

export const HeaderArea = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

import styled from 'styled-components'

export const Shimmer = styled.div`
  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  border-radius: 1rem;
  margin: 0.25rem;
  background: #f5f5f5;
  display: inline-block;
  background-image: linear-gradient(to right, #f5f5f5 40%, #ccc 50%, #eee 60%);
  background-size: 1000px 1000px;
  background-repeat: no-repeat;
  animation: shimmer 2s infinite linear;
`

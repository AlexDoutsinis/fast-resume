import styled from "styled-components"

export const FeaturesWrapperStyled = styled.section`
  height: 45vh;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: solid red 2px; */
  background-color: var(--light-blue-color);
`

export const FeaturesContentStyled = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    margin-top: 1.5rem;
  }
`

export const FeaturesIllustrationStyled = styled.div`
  margin-top: 2rem;
`

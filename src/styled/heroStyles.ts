import styled from "styled-components"

export const HeroWrapperStyled = styled.section`
  height: calc(55vh - var(--header-height));
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeroContentStyled = styled.div`
  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    font-weight: 300;
  }

  button {
    background-color: var(--dark-blue-color);
    color: white;
    border: 1px solid var(--dark-blue-color);
    border-radius: 5px;
    padding: 0.8rem 1rem;
    margin-top: 2rem;
    cursor: pointer;
  }
`

export const HeroIllustrationStyled = styled.div`
  margin-top: 2.5rem;
`

import styled from "styled-components"

export const TemplateWrapperStyled = styled.section`
  h3 {
    margin: 2rem 0;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
  }
`

export const TemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  justify-content: center;
  grid-gap: 1.5rem;

  div {
    border: solid 0.5px var(--light-blue-color);
    cursor: pointer;
    box-shadow: 0px 0px 7px 1px var(--light-blue-color);
    border-radius: 5px;
  }
`

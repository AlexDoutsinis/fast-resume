import styled from "styled-components"

export const TemplateWrapperStyled = styled.section`
  h3 {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.3rem;
    font-weight: 700;
  }
`

export const TemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  grid-row-gap: 500px;
  margin-top: 1.5rem;

  div {
    border: solid 0.5px var(--light-blue-color);
    cursor: pointer;
    box-shadow: 0px 0px 7px 1px var(--light-blue-color);
    border-radius: 5px;
  }
`

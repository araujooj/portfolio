import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
`

export const TextContainer = styled.div`
  width: 500px;
  h1 {
    margin-bottom: 6px;
  }
`

export const SkillsContainer = styled.div`
  ul {
    margin-top: 45px;
    row-gap: 7%;
    column-gap: 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;

    p {
      margin-top: 8px;
    }
  }
`

export const Whitebox = styled.div`
  width: 300px;
  padding: 15px;
  height: 300px;
  background: #f5f5f5;
  box-shadow: 2px 2px #151515;
  color: #151515;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: 250px;
  }

  border-radius: 5px;
`

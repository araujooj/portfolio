import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50vh;
  margin-top: 20%;
  margin-bottom: 20%;
`

export const TextContainer = styled.div`
  width: 500px;
  h1 {
    margin-bottom: 6px;
  }
`

export const ServiceContainer = styled.div`
  ul {
    margin-top: 45px;
    row-gap: 15%;
    column-gap: 0px;
    max-width: 1200px;
    margin-left: 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;

    li {
      margin-left: 5%;
        
      img { 
        width: 65px;
      }
    }

    p {
      margin-top: 8px;
    }
  }
`

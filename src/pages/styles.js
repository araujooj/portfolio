import styled from "styled-components"
import { shade } from "polished"

export const Container = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  min-height: 70vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  width: 500px;
  h1 { 
    margin-bottom: 6px;
  }

  p{ 
    color: #E5E5E5;
  }
  button {
    background: #bb0a21;
    height: 56px;
    border-radius: 4px;
    border: 0;
    width: 150px;
    color: #f5f5f5;
    font-weight: 800;
    transition: 0.5s;
    margin-top: 16px;
    &:hover {
      background: ${shade(0.2, "#BB0A21")};
    }
    margin-right: 3%;
    box-shadow: 2px 2px #151515;

    svg {
      transform: translateY(2.4px);
      margin-right: 3%;
    }
  }
`

export const Image = styled.img`
  max-width: 400px;
`

export const ScrollIndicator = styled.div`
  border: solid 2px white;
  width: 20px;
  height: 30px;
  border-radius: 25px;
  position: absolute;
  transform: translate(-50%);
  bottom: 6%;
  left: 50%;

  ::before {
    background: white;
    content: "";
    height: 5px;
    width: 5px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 5px;
    border-radius: 50%;
    animation: scroll 1s infinite ease-in-out;
  }

  @keyframes scroll {
    0% {
      top: 5px;
      opacity: 0;
    }

    100% {
      top: 15px;
      opacity: 1;
    }
  }
`

export const ScrollText = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%);
  font-size: 18px;
`

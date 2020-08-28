import React from "react"
import Layout from "../../components/layout"
import { Container, TextContainer, Whitebox, SkillsContainer } from "./styles"
import Ui from '../../assets/ui.svg'
import Bancos from '../../assets/bancos.svg'
import Html from '../../assets/html.svg'
import Node from '../../assets/node.svg'
import ReactIcon from '../../assets/react.svg'
import Typescript from '../../assets/typescript.svg'

function Skills() {
  return (
    <Layout>
      <Container> 
      <TextContainer>
        <h1>Minhas habilidades técnicas </h1>
        <p>
          As habilidades que venho aplicando na prática - desde quando comecei a
          desenvolver.
        </p>
      </TextContainer>
      <SkillsContainer>
        <ul>
          <li>
            <Whitebox>
              <img src = {Html} />
              <strong> HTML, Javascript, CSS</strong>
            </Whitebox>
          </li>
          <li>
            <Whitebox>
            <img src = {Typescript} />
              <strong>Typescript</strong>
            </Whitebox>
          </li>
          <li>
            <Whitebox>
            <img src = {ReactIcon} />
              <strong>React & React Native</strong>
            </Whitebox>
          </li>
          <li>
            <Whitebox>
            <img src = {Node} />
              <strong>NodeJS</strong>
            </Whitebox>
          </li>
          <li>
            <Whitebox>
            <img src = {Ui} />
              <strong>UI Design</strong>
            </Whitebox>
          </li>
          <li>
            <Whitebox>
            <img src = {Bancos} />
              <strong>Bancos relacionais e não relacionais</strong>
            </Whitebox>
          </li>
        </ul>
      </SkillsContainer></Container> 
     
    </Layout>
  )
}

export default Skills

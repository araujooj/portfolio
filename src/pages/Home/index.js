import React from 'react';
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi"
import {
  Container,
  TextContainer,
  Image,
  ScrollIndicator,
  ScrollText,
} from "./styles"
import SEO from '../../components/seo'
import Layout from "../../components/layout"
import Profile from "../../assets/profile.png"

function Home() {
  return (
    <Layout>
      <SEO title="Gabriel Araújo - Portfólio" />
      <Container>
        <TextContainer>
          <h1>Olá, tudo certo? </h1>
          <p>Sou o Gabriel Araújo, esse é o meu cantinho na internet.</p>
          <p>
            Sou um desenvolvedor Web & Mobile. Sou um grande entusiasta das
            tecnologias React, React Native & NodeJS.
          </p>
          <a
            href="http://github.com/araujooj/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FiGithub width={20} /> Github
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/araujooj/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FiLinkedin /> Linkedin
            </button>
          </a>
          <a
            href="https://www.instagram.com/dev.araujo/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FiInstagram /> Instagram
            </button>
          </a>
        </TextContainer>

        <Image src={Profile} />
      </Container>
      <ScrollIndicator />
      <ScrollText>Desça</ScrollText>
    </Layout>
  )
}

export default Home;
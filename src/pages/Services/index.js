import React from "react"
import Layout from "../../components/layout"
import { Container, TextContainer, ServiceContainer } from "./styles"
import FiMonitor from '../../assets/monitor.svg'
import FiSmartphone from '../../assets/smartphone.svg'
import FiEdit from '../../assets/edit.svg'
import FiLink from '../../assets/link.svg'

function Services() {
  return (
    <Layout>
      <Container>
        <TextContainer>
          <h1>Serviços disponíveis </h1>
          <p>
            Esses são os serviços no qual me especializei nos últimos anos e que
            venho cada vez mais tentando ser melhor.
          </p>
        </TextContainer>

        <ServiceContainer>
          <ul>
            <li>
              <img src ={FiMonitor} />
              <h2> Desenvolvimento <br/> de sites </h2>
              <p>Desenvolvimento de um site de acordo com sua demanda.</p>
            </li>

            <li>
              <img src={FiSmartphone}  />
              <h2> Desenvolvimento de aplicativos </h2>
              <p>Desenvolvimento de apps + publicação nas lojas.</p>
            </li>
            <li>
              <img src={FiEdit} />
              <h2>Design de interfaces</h2>
              <p>Design da interface do seu site e/ou app.</p>
            </li>
            <li>
              <img src={FiLink} />
              <h2> Desenvolvimento de APIs </h2>
              <p>Desenvolvimento de APIs para seu site e/ou app.</p>
            </li>
          </ul>
        </ServiceContainer>
        
      </Container>
    </Layout>
  )
}

export default Services

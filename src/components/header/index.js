import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Container } from "./styles"
import React from "react"

const Header = () => (
  <Container>
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/import">Serviços</Link>
        <Link to="/import">Habilidades</Link>
        <Link to="/import">Trabalhos</Link>
        <Link to="/import">Contato</Link>
      </nav>
    </header>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

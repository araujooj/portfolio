import React from "react"
import Header from "../components/header"
import Home from './Home'
import Services from './Services'
import Skills from './Skills'
import Experience from './Experience'
import "./index.css"
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <>
    <Header />
    <Home/>
    <Services/>
    <Skills/>
    <Experience />
  </>
)

export default IndexPage

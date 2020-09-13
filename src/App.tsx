// Imports
import React, { Fragment } from 'react'
import { Routes } from "./Helpers/Routes"
import NavBar from "./Helpers/NavBar"
import { Container } from './Styles/Helpers'

const App = () =>
  <Fragment>
    <NavBar />
    <Container>
      <Routes />
    </Container>
  </Fragment>


export default App

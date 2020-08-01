import React from 'react'

import { Container, Nav, NavItem } from './styled'
import { Logo } from './components'

export default function Header() {
  return (
    <header>
      <Container>
        <Nav>
          <NavItem>test</NavItem>
          <NavItem>test</NavItem>
        </Nav>
        <Logo />
      </Container>
    </header>
  )
}

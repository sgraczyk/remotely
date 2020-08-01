import React from 'react'
import { Image } from '@chakra-ui/core'

import logo from '../../../../assets/icons/logo.svg'
import { LogoLink } from './styled'

export default function Logo() {
  return (
    <LogoLink href="/">
      <Image className="App-logo" src={logo} height="50px" alt="logo" />
      <span>Remotely</span>
    </LogoLink>
  )
}

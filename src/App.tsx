import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import { Header } from './components/layout/header'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Remotely - remote-first job board</p>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App

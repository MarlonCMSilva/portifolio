import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Projetos from './containers/Projetos'
import SideBar from './containers/SideBar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styte'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

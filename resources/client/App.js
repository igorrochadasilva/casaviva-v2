import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

//PAGES
import Home from './pages/home'
import MinhaCasaMinhaVida from './pages/MinhaCasaMinhaVida'
import Simulador from './pages/Simulador'
import Sobre from './pages/Sobre'
import Sustentabilidade from './pages/Sustentabilidade'
import Contato from './pages/Contato'
import Morumbi from './pages/Morumbi'
import LynePiritube from './pages/LynePiritube'
import Termos from './pages/TermosCondicoes'
import Politicas from './pages/PoliticaPrivacidade'
import NotFound from './pages/404'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={MinhaCasaMinhaVida} path="/minha-casa-minha-vida" />
        <Route component={Simulador} path="/simulador" />
        <Route component={Sobre} path="/sobre-casaviva" />
        <Route component={Sustentabilidade} path="/sustentabilidade" />
        <Route component={Contato} path="/fale-conosco" />
        <Route component={Morumbi} path="/ficha/casaviva-morumbi" />
        <Route component={LynePiritube} path="/lyne-pirituba" />
        <Route component={Termos} path="/termos-e-condicoes" />
        <Route component={Politicas} path="/politica-de-privacidade" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

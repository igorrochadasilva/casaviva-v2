import React from 'react'

//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carrossel'
import DestaquesSection from '../../components/DestaquesSection'
import Simular from '../../components/Simulador/index'

import '../../../assets/scss/pages/Home/index.scss'

const nossosProdutos = () => {
  return (
    <div>
      <Header />

      <Carousel />

      <DestaquesSection sectionTitle="Lançamentos" />

      <Simular />

      <Footer />
    </div>
  )
}

export default nossosProdutos

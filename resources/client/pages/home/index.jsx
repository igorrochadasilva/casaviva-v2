import React from 'react'

//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carrossel'
import DestaquesSection from '../../components/DestaquesSection'
import SobreCasaViva from '../../components/SobreCasaViva'
import InstagramSection from '../../components/InstagramSection'
import FaleConosco from '../../components/FaleConosco'
import Simular from '../../components/Simulador/index'

import '../../../assets/scss/pages/NossosProdutos/index.scss'

const Home = () => {
  return (
    <div>
      <Header />

      <Carousel />

      <DestaquesSection sectionTitle="Destaques CasaViva" />

      <Simular />

      <SobreCasaViva />

      <InstagramSection />

      <FaleConosco />

      <Footer />
    </div>
  )
}

export default Home

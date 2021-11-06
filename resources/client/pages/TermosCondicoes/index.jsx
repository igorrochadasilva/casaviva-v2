import React from 'react'
import '../../../assets/scss/pages/TermosCondicoes/index.scss';

//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const TermosCondicoes = () => {
  return (
    <div>
      <Header />
      <div id="page-termos-e-condicoes">
        <div className="container_app">
          <h1>
            Termos e Condições
          </h1>
          <div className="item">
            <p>
              Estes termos de serviço regulam o uso deste site
            </p>
            <ul>
              <li>
                Acessá-lo implica na concordância com os mesmos. Por favor, consulte regularmente os nossos termos de serviço.
              </li>
            </ul>
          </div>
          <div className="item">
            <p>
              Restrições de uso
            </p>
            <ul>
              <li>
                Seu uso deste site só poderá estar dentro do propósito permitido por nós.. Você não poderá usá-lo para qualquer outro objetivo, principalmente comercial, sem o nosso consentimento prévio. Não associe nossas marcas a nenhuma outra. Não exponha nosso nome,
                logotipo, ou qualquer informação institucional indevidamente e de forma a causar transtornos.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermosCondicoes

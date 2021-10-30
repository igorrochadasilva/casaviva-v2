import React from 'react'

import FloatCta from '../../components/FloatCta';
import CookiesAlert from '../../components/CookiesAlert';

const Footer = () => {
  return (
    <footer>
      <div className="el-row custom-mg">
        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-5 custom-pd">
          <ul>
            <li className="strong">
              <a href="/minha-casa-minha-vida" className="">
                O programa Minha Casa Minha Vida
              </a>
            </li>
            <li className="strong">
              <a href="/sobre-casaviva" className="">
                Sobre a CasaViva
              </a>
            </li>
            <li className="strong">
              <a href="/sustentabilidade" className="">
                Sustentabilidade
              </a>
            </li>
            <li className="strong">
              <a
                href="https://casaviva.freshdesk.com/support/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Espaço do Cliente
              </a>
            </li>
            <li className="strong">
              <a href="/fale-conosco" className="">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-4 custom-pd">
          <ul className="emps">
            <li className="strong">Empreendimentos</li>
            <li>
              <a href="/ficha/casaviva-morumbi" className="">
                » CasaViva Morumbi
              </a>
            </li>
            <li>
              <a href="/lyne-pirituba" className="">
                » Lyne Pirituba
              </a>
            </li>
            <li>
              <a href="/nossos-produtos" className="">
                » CasaViva Giovanni Gronchi
              </a>
            </li>
            <li className="strong t-cherry">
              <a href="/simulador" className="">
                Simule seu financiamento
              </a>
            </li>
          </ul>
        </div>
        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-4 custom-pd">
          <ul className="sm">
            <li className="strong">Redes sociais</li>
            <li>
              <a
                href="https://www.facebook.com/casavivasp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                » Facebook <i className="cv-icons cv-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/minha_casa_viva/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
              >
                » Instagram <i className="cv-icons cv-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://br.linkedin.com/company/minhacasaviva"
                target="_blank"
                rel="noopener noreferrer"
              >
                » Linkedin <i className="cv-icons cv-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-4 custom-pd">
          <ul>
            <li className="strong">
              <a href="/termos-e-condicoes" className="">
                Termos e Condições
              </a>
            </li>
            <li className="strong">
              <a href="/politica-de-privacidade" className="">
                Política de Privacidade e Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <FloatCta />
      <CookiesAlert />
    </footer>
  )
}

export default Footer

import React from 'react'

//images
import logoSvg from '../../../assets/images/casaviva-logo.svg'

//Components
import MenuMobile from './components/MenuMobile'

const OpenMenuMobile = () => {
  document.getElementById('menuMobile').classList.add('is-active')
}

const Header = () => {
  return (
    <header>
      <div id="topbar">
        <div className="el-row is-justify-center is-align-middle el-row--flex">
          <div className="el-col el-col-24 el-col-xs-18 el-col-sm-6">
            <div className="logo">
              <a href="/">
                <img width="282px" height="32px" src={logoSvg} />
              </a>
            </div>
          </div>

          <div className="hidden-xs-only el-col el-col-18">
            <div className="header-menu">
              <ul>
                <li className="link in menu.links">
                  <a href="/">Nossos produtos</a>
                </li>
                <li className="link in menu.links">
                  <a href="/">Casa Verde e Amarela</a>
                </li>
                <li className="link in menu.links">
                  <a href="/">Espaço cliente</a>
                </li>
                <li>
                  <a href="/" className="menu-button">
                    Simule agora
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden-sm-and-up  el-col el-col-24 el-col-offset-3 el-col-xs-3">
            <div className="toggleMobileWrapper" onClick={() => OpenMenuMobile()}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile logo={logoSvg} />
    </header>
  )
}

export default Header

import React from 'react'

const MenuMobile = ({ logo }) => {
  const CloseMenuMobile = () => {
    document.getElementById('menuMobile').classList.remove('is-active')
  }

  return (
    <div>
      <div id="menuMobile">
        <div className="main">
          <div className="header">
            <img src={logo} />
          </div>
          <ul>
            <li>
              <a href="/nossos-produtos" className="nuxt-link-exact-active nuxt-link-active">
                Nossos produtos
              </a>
            </li>
            <li>
              <a href="/minha-casa-minha-vida" className="">
                Minha Casa Minha Vida
              </a>
            </li>
            <li>
              <a href="/sobre-casaviva" className="">
                Sobre
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://casaviva.freshdesk.com/support/login"
                rel="noopener noreferrer"
              >
                Espaço Cliente
              </a>
            </li>
            <li>
              <a href="/simulador" className="">
                Simule Agora
              </a>
            </li>
          </ul>
        </div>
        <div className="close" onClick={() => CloseMenuMobile()}>
          <div>✕</div>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile

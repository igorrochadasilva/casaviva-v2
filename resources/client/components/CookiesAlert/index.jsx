import React, { useRef } from 'react'

import '../../../assets/scss/components/CookiesAlert/index.scss'

const CookiesAlert = () => {
  const cookieStatus = localStorage.getItem('acceptCookie')
  const modal = useRef(null)

  const handleClick = () => {
    const { current } = modal

    localStorage.setItem('acceptCookie', 'true')
    current.classList.remove('show')
    current.classList.add('hide')
  }

  return !cookieStatus ? (
    <div id="cookiesAlert" className="show" ref={modal}>
      <div className="el-row is-justify-center is-align-middle el-row--flex">
        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-18">
          <p>
            Usamos cookies para ajudar a personalizar conteúdo, adaptar e medir anúncios e oferecer
            uma experiência mais segura. Ao navegar no site, você concorda com o uso de cookies para
            coletar informações.
            <a href="/politica-de-cookies" className="">
              Leia nossa Política de cookies.
            </a>
          </p>
        </div>
        <div className="el-col el-col-24 el-col-xs-24 el-col-sm-6">
          <div className="wrapButtons">
            <a className="btn-primary-red" onClick={() => handleClick()}>
              Eu aceito
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    false
  )
}

export default CookiesAlert

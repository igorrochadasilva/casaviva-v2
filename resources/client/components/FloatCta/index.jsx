import React, { useState, useRef, useEffect } from 'react'

//components
import FormCTA from './components/FormCTA'

import '../../../assets/scss/components/FloatCta/index.scss'

const FloatCta = () => {
  const [modalSteps, setModalSteps] = useState('1')

  const menuFloat = useRef(null)
  const dialogFab = useRef(null)
  const dialogFabBody = useRef(null)
  const rcModal = useRef(null)

  //etapa 1 - click em box de atendimento
  const handleClickCTA = () => {
    menuFloat.current.classList.add('show')
  }

  //etapa 2: click em menu option e abertura de form
  const OpenModalCTA = () => {
    dialogFab.current.classList.add('show')
    rcModal.current.classList.add('show')
    menuFloat.current.classList.remove('show')
  }

  //click em uma das opções do CTA
  const CloseDialogFab = () => {
    dialogFab.current.classList.remove('show')
    rcModal.current.classList.remove('show')
  }

  //ver se clique foi dentro ou fora do compoennt
  const handleClickOutsideFloat = (event) => {
    if (menuFloat.current && !menuFloat.current.contains(event.target)) {
      menuFloat.current.classList.remove('show')
    }
  }

  const handleClickOutSiteDialogBody = (event) => {
    if (dialogFabBody.current && !dialogFabBody.current.contains(event.target)) {
      dialogFab.current.classList.remove('show')
      rcModal.current.classList.remove('show')
    }
  }

  const handleOutSideClikss = (event) => {
    handleClickOutsideFloat(event)
    handleClickOutSiteDialogBody(event)
  }

  useEffect(() => {
    document.addEventListener('click', handleOutSideClikss, true)
    return () => {
      document.removeEventListener('click', handleOutSideClikss, true)
    }
  })

  return (
    <div>
      <div id="floatCta">
        <div className="wrapper">
          <a href="/simulador" className="hidden-sm-and-up btn-primary-red">
            Simule Agora
          </a>
          <ul className="initial" onClick={() => handleClickCTA()}>
            <li>
              <i className="cv-icons cv-chat-o"></i>
              <span>Atendimento</span>
            </li>
          </ul>
          <ul className="menuFloat" ref={menuFloat}>
            <li onClick={() => OpenModalCTA()}>
              <i className="cv-icons cv-whatsapp"></i>
              <span>WhatsApp</span>
            </li>
            <li onClick={() => OpenModalCTA()}>
              <i className="cv-icons cv-chat"></i>
              <span>Chat</span>
            </li>
            <li onClick={() => OpenModalCTA()}>
              <i className="cv-icons cv-envelope"></i>
              <span>Mensagem</span>
            </li>
          </ul>
        </div>
      </div>
      <div ref={dialogFab} className="el-dialog__wrapper" id="dialogFab">
        <div
          ref={dialogFabBody}
          role="dialog"
          aria-modal="true"
          aria-label="dialog"
          className="el-dialog"
        >
          <div className="el-dialog__header">
            <span className="el-dialog__title"></span>
            <button
              type="button"
              aria-label="Close"
              className="el-dialog__headerbtn"
              onClick={() => {
                CloseDialogFab()
              }}
            >
              <i className="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <div className="el-dialog__body">
            {modalSteps === '1' && (
              <div className="step1">
                <h2>
                  Você já é
                  <br />
                  nosso cliente?
                </h2>
                <div className="wrapButtons">
                  <a className="btn-primary-white" onClick={() => setModalSteps('2')}>
                    Já sou cliente CasaViva
                  </a>
                  <a className="btn-primary-red" onClick={() => setModalSteps('3')}>
                    Ainda não sou cliente
                  </a>
                </div>
              </div>
            )}
            {modalSteps === '2' && (
              <div className="stepCliente">
                <h2>Legal! Você já é um cliente. Quer falar sobre algum assunto específico?</h2>
                <div className="goback" onClick={() => setModalSteps('1')}>
                  ←
                </div>
              </div>
            )}

            {modalSteps === '3' && (
              <div className="stepNCliente">
                <h2>Preencha seus dados para prosseguir</h2>
                <FormCTA />
                <div className="goback" onClick={() => setModalSteps('1')}>
                  ←
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="rc-modal" ref={rcModal}></div>
    </div>
  )
}

export default FloatCta

import React from 'react'

import '../../../assets/scss/components/FloatCta/index.scss'

const FloatCta = () => {
  return (
    <div>
      <div id="floatCta">
        <div className="wrapper">
          <a href="/simulador" className="hidden-sm-and-up btn-primary-red">
            Simule Agora
          </a>
          <ul className="initial">
            <li>
              <i className="cv-icons cv-chat-o"></i>
              <span>Atendimento</span>
            </li>
          </ul>
          <ul className="menuFloat">
            <li>
              <i className="cv-icons cv-whatsapp"></i>
              <span>WhatsApp</span>
            </li>
            <li>
              <i className="cv-icons cv-chat"></i>
              <span>Chat</span>
            </li>
            <li>
              <i className="cv-icons cv-envelope"></i>
              <span>Mensagem</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="el-dialog__wrapper" id="dialogFab">
        <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog">
          <div className="el-dialog__header">
            <span className="el-dialog__title"></span>
            <button type="button" aria-label="Close" className="el-dialog__headerbtn">
              <i className="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatCta

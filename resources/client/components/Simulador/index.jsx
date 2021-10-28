import React from 'react'

//react components
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

const Simular = () => {
  return (
    <div>
      <section id="simulacaoSec">
        <div className="container_app">
          <div className="row el-row is-align-middle el-row--flex">
            <div className="first-col-mob el-col el-col-24 el-col-xs-24 el-col-sm-11 flex-48">
              <h1>
                Simule aqui o<br /> financiamento <br /> do seu novo Apê!
              </h1>
              <img
                width="435"
                height="238"
                src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/2fbf832.svg"
                alt="Ícone de simulação"
              />
            </div>
            <div className="el-col el-col-24 el-col-xs-24 el-col-sm-13 flex-52">
              <form id="formSimulacao">
                <div className="wrapper">
                  <div className="appInput el-input">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Digite seu nome"
                      required="required"
                      className="el-input__inner wd-100"
                    />
                  </div>
                </div>
                <div className="el-row n-ml-10 n-mr-10 dp-flex">
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pr-10 wd-50">
                    <div className="wrapper">
                      <div className="appInput el-input">
                        <input
                          type="email"
                          autoComplete="off"
                          placeholder="Digite seu e-mail"
                          required="required"
                          className="el-input__inner"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pl-10">
                    <div className="wrapper">
                      <div className="appInput el-input">
                        <input
                          type="tel"
                          autoComplete="off"
                          placeholder="Digite seu telefone"
                          minLength="14"
                          required="required"
                          className="el-input__inner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-row n-ml-10 n-mr-10 dp-flex">
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pr-10">
                    <div className="wrapper">
                      <div className="appInput el-input">
                        <input
                          type="tel"
                          autoComplete="off"
                          maxLength="11"
                          placeholder="Digite sua renda"
                          required="required"
                          className="el-input__inner"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pl-10">
                    <div className="wrapper">
                      <div className="el-select appInput" required="required">
                        <div className="el-input el-input--suffix">
                          <input
                            type="text"
                            readOnly="readOnly"
                            autoComplete="off"
                            placeholder="Possui FGTS?"
                            className="el-input__inner"
                          />
                          <span className="el-input__suffix">
                            <span className="el-input__suffix-inner">
                              <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
                            </span>
                          </span>
                        </div>
                        <div className="el-select-dropdown el-popper dp-nn mw-custom">
                          <div className="el-scrollbar">
                            <div className="el-select-dropdown__wrap el-scrollbar__wrap n-mb-17 n-mr-17">
                              <ul className="el-scrollbar__view el-select-dropdown__list">
                                <li className="el-select-dropdown__item">
                                  <span>Sim</span>
                                </li>
                                <li className="el-select-dropdown__item">
                                  <span>Não</span>
                                </li>
                              </ul>
                            </div>
                            <div className="el-scrollbar__bar is-horizontal">
                              <div className="el-scrollbar__thumb tsf-translateX-0"></div>
                            </div>
                            <div className="el-scrollbar__bar is-vertical">
                              <div className="el-scrollbar__thumb tsf-translateX-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-row n-ml-10 n-mr-10 dp-flex">
                  <div className="el-col el-col-24">
                    <div
                      role="group"
                      aria-label="checkbox-group"
                      className="el-checkbox-group appInput"
                      required="required"
                    >
                      <label className="el-checkbox" required="required">
                        <span className="el-checkbox__input">
                          <span className="el-checkbox__inner checkbox-styled"></span>
                          <input
                            type="checkbox"
                            aria-hidden="false"
                            name="agree"
                            className="el-checkbox__original"
                            value=""
                          />
                        </span>
                        <span className="el-checkbox__label">
                          <span className="el-checkbox__label ">
                            Autorizo que meus dados sejam coletados para eventual contato com
                            ofertas ofertas e novidades.
                            <a href="/politica-de-privacidade" className="">
                              Leia a política de privacidade.
                            </a>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary-blue">
                  Simule agora
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="el-dialog__wrapper dp-none" id="dialogSimulacao">
          <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog mg-t-15vh">
            <div className="el-dialog__header">
              <span className="el-dialog__title"></span>
              <button type="button" aria-label="Close" className="el-dialog__headerbtn">
                <i className="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Simular

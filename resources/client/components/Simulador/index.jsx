import React, { useRef, useState } from 'react'

//react components
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import Select from 'react-dropdown-select'

const Simular = () => {
  const checkbox = useRef(null)
  const inputCheckbox = useRef(null)

  const [inputFgts, setInputFgts] = useState(false)

  const options = [
    { value: 'Sim', label: 'Sim' },
    { value: 'Não', label: 'Não' },
  ]

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  //evento de checkbox
  const handleCheckBoxClick = () => {
    const { current } = checkbox
    current.classList.contains('checked')
      ? current.classList.remove('checked')
      : current.classList.add('checked')
  }

  //abrir input de inserção de fgts
  const OpenFgts = (value) => {
    value[0].value === 'Sim' ? setInputFgts(true) : {}
  }

  //enviar dados
  const onSubmit = (data) => {
    console.log(data)
  }

  console.log(watch())
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
              <form id="formSimulacao" onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper">
                  <div className="appInput el-input">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Digite seu nome"
                      className="el-input__inner wd-100"
                      {...register('nome', { required: 'Campo obrigatório.' })}
                      id="nome"
                    />
                    {errors.nome && <p>{errors.nome.message}</p>}
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
                          className="el-input__inner"
                          {...register('email', { required: 'Campo obrigatório.' })}
                          id="email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pl-10">
                    <div className="wrapper">
                      <div className="appInput el-input">
                        <InputMask
                          type="tel"
                          autoComplete="off"
                          placeholder="Digite seu telefone"
                          className="el-input__inner"
                          mask="(99) 99999-9999"
                          type="text"
                          {...register('telefone', {
                            required: 'Campo obrigatório.',
                            minLength: 14,
                          })}
                          name="telefone"
                          id="telefone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-row n-ml-10 n-mr-10 dp-flex">
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pr-10">
                    <div className="wrapper">
                      <div className="appInput el-input">
                        <InputMask
                          type="text"
                          autoComplete="off"
                          placeholder="Digite sua renda"
                          className="el-input__inner"
                          mask="R$ 9.999,99"
                          {...register('renda', {
                            required: 'Campo obrigatório.',
                            minLength: 14,
                          })}
                          name="renda"
                          id="renda"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pl-10">
                    <div className="wrapper">
                      <div className="el-select appInput" required="required">
                        <div className="el-input el-input--suffix">
                          <Select
                            placeholder="Possui FGTS?"
                            handle={true}
                            valueField="fgts"
                            color="#f5f7fa"
                            dropdownHeight="300px"
                            options={options}
                            onChange={(val) => OpenFgts(val)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {inputFgts && (
                  <div className="el-row n-ml-10 n-mr-10 dp-flex">
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pr-10">
                      <div className="wrapper">
                        <div className="appInput el-input">
                          <InputMask
                            type="text"
                            autoComplete="off"
                            placeholder="Digite seu FGTS"
                            className="el-input__inner"
                            mask="R$ 999.999,99"
                            {...register('fgts', {
                              required: 'Campo obrigatório.',
                            })}
                            name="fgts"
                            id="fgts"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pr-10"></div>
                  </div>
                )}

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
                          <span
                            className="el-checkbox__inner checkbox-styled"
                            ref={checkbox}
                            onClick={() => handleCheckBoxClick()}
                          ></span>
                          <input
                            ref={inputCheckbox}
                            type="checkbox"
                            aria-hidden="false"
                            name="agree"
                            className="el-checkbox__original"
                            {...register('agree', {
                              required: 'Campo obrigatório.',
                            })}
                            defaultChecked={false}
                            nome="agree"
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

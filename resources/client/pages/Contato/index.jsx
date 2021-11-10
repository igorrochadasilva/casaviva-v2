import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import Select from 'react-dropdown-select'

//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Contato = () => {
  const optionsCliente = [
    { value: 'Sim', label: 'Sim' },
    { value: 'Não', label: 'Não' },
  ]

  const optionsAssunto = [
    { value: 'Interesse em empreendimento', label: 'Interesse em empreendimento' },
    { value: 'Dúvidas', label: 'Dúvidas' },
    { value: 'Trabalhe conosco', label: 'Trabalhe conosco' },
    { value: 'Terrenos', label: 'Terrenos' },
    { value: 'Outros assuntos', label: 'Outros assuntos' },
  ]

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm()

  const SendForm = (data) => {
    console.log(data)
  }

  console.log(watch())

  return (
    <div>
      <Header />
      <div id="page-fale-conosco">
        <section id="contactSec">
          <div className="container_app">
            <div className="el-row is-align-middle el-row--flex">
              <div className="st el-col el-col-24 el-col-xs-24 el-col-sm-11">
                <h1>Contato CasaViva</h1>
                <img
                  width="285"
                  height="314"
                  src="https://casaviva-prod.s3.amazonaws.com/public/current-build/img/538929c.svg"
                  alt="Ícone de carta"
                />
              </div>
              <div className="el-col el-col-24 el-col-xs-24 el-col-sm-13">
                <form id="contactForm" onSubmit={handleSubmit(SendForm)}>
                  <div className="wrapper">
                    <div className="appInput el-input">
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Digite seu nome"
                        required="required"
                        className="el-input__inner el-input_name"
                        {...register('nome', { required: 'Campo obrigatório.' })}
                        id="nome"
                      />
                      {errors.nome && <p>{errors.nome.message}</p>}
                    </div>
                  </div>
                  <div className="el-row mg-lr-n10 el-row-custom">
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pd-lr-10">
                      <div className="wrapper">
                        <div className="appInput el-input">
                          <input
                            type="email"
                            autoComplete="off"
                            placeholder="Digite seu e-mail"
                            required="required"
                            className="el-input__inner"
                            {...register('email', { required: 'Campo obrigatório.' })}
                            id="email"
                          />
                          {errors.email && <p>{errors.email.message}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pd-lr-10">
                      <div className="wrapper">
                        <div className="appInput el-input">
                          <InputMask
                            type="tel"
                            autoComplete="off"
                            placeholder="Digite seu telefone"
                            mask="(99) 99999-9999"
                            required="required"
                            className="el-input__inner"
                            {...register('telefone', { required: 'Campo obrigatório.' })}
                            id="telefone"
                          />
                          {errors.telefone && <p>{errors.telefone.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="el-row mg-lr-n10 el-row-custom">
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pd-lr-10">
                      <div className="wrapper">
                        <div className="el-select appInput" required="required">
                          <div className="el-input el-input--suffix">
                            <Controller
                              name="cliente"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  placeholder="Já é cliente?"
                                  handle={true}
                                  valueField="cliente"
                                  color="#f5f7fa"
                                  dropdownHeight="300px"
                                  options={optionsCliente}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="el-col el-col-24 el-col-xs-24 el-col-sm-12 pd-lr-10">
                      <div className="wrapper">
                        <div className="el-select appInput" required="required">
                          <div className="el-input el-input--suffix">
                            <Controller
                              name="assunto"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  placeholder="Assunto?"
                                  handle={true}
                                  valueField="assunto"
                                  color="#f5f7fa"
                                  dropdownHeight="300px"
                                  options={optionsAssunto}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="el-row-custom">
                    <div className="el-col el-col-24">
                      <div className="wrapper">
                        <div className="appInput el-textarea">
                          <textarea
                            autoComplete="off"
                            rows="4"
                            placeholder="Digite sua mensagem"
                            required="required"
                            className="el-textarea__inner"
                            {...register('mensagem', { required: 'Campo obrigatório.' })}
                            id="mensagem"
                          />
                          {errors.mensagem && <p>{errors.mensagem.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary-white">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="el-dialog__wrapper" id="dialogContactForm">
            <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog">
              <div className="el-dialog__header">
                <span className="el-dialog__title"></span>
                <button type="submit" aria-label="Close" className="el-dialog__headerbtn">
                  <i className="el-dialog__close el-icon el-icon-close"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="infos-contact">
          <div className="container_app map">
            <div className="st">
              <h3>Onde estamos</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7310.586730452292!2d-46.74640401063118!3d-23.62966269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51514a1ef1e1%3A0xee8b2fa4dfccd5f9!2sExto%20Empreendimentos!5e0!3m2!1spt-BR!2sbr!4v1590398290545!5m2!1spt-BR!2sbr"></iframe>
            </div>
          </div>
          <div className="container_app">
            <div className="el-row" id="details-contact">
              <div className="el-col el-col-24 el-col-xs-24 el-col-sm-4">
                <h3>
                  Nossos <br /> Contatos
                </h3>
              </div>
              <div className="list el-col el-col-24 el-col-offset-1 el-col-xs-24 el-col-sm-19">
                <div className="el-row mg-lr-n5 el-row-custom">
                  <div className="item el-col el-col-24 el-col-xs-12 el-col-sm-6 pd-lr-5">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i className="cv-icons cv-mapmarker"></i>
                          </td>
                          <td>
                            <h4>Endereço</h4>
                            <address>Av. Eliseu de Almeida, 1415 - Butantã São Paulo</address>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="item el-col el-col-24 el-col-xs-12 el-col-sm-6 pd-lr-5">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i className="cv-icons cv-phone"></i>
                          </td>
                          <td>
                            <h4>Telefone</h4>
                            <p>
                              <a href="tel:1147103050">(11) 4710-3050</a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="el-row mg-lr-n5 el-row-custom">
                  <div className="item el-col el-col-24 el-col-xs-12 el-col-sm-6 pd-lr-5">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i className="cv-icons cv-whatsapp"></i>
                          </td>
                          <td>
                            <h4>WhatsApp</h4>
                            <p>
                              <a
                                href="https://api.whatsapp.com/send?phone=+5511963227590&amp;text"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                (11) 96322-7590
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="item el-col el-col-24 el-col-xs-12 el-col-sm-6 pd-lr-5">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i className="cv-icons cv-chat"></i>
                          </td>
                          <td>
                            <h4>Chat online</h4>
                            <p>
                              <a href="">Iniciar Chat</a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Contato

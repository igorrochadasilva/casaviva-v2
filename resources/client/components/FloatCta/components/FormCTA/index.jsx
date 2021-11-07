import react from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

const FormCTA = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  console.log(watch())

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="appInput el-input">
        <input
          type="text"
          autoComplete="off"
          placeholder="Digite seu nome"
          className="el-input__inner"
          {...register('nome', { required: 'Campo obrigatório.' })}
          id="nome"
        />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>
      <div className="appInput el-input">
        <input
          type="email"
          autoComplete="off"
          placeholder="Digite seu e-mail"
          className="el-input__inner"
          {...register('email', { required: 'Campo obrigatório.' })}
          id="email"
        />
      </div>
      <div className="appInput el-input">
        <InputMask
          type="tel"
          autoComplete="off"
          placeholder="Digite seu telefone"
          className="el-input__inner"
          mask="(99) 99999-9999"
          type="text"
          {...register('telefone', { required: 'Campo obrigatório.' })}
          name="telefone"
          id="telefone"
        />
      </div>
      <button type="submit" className="btn-primary-red">
        Enviar
      </button>
    </form>
  )
}

export default FormCTA

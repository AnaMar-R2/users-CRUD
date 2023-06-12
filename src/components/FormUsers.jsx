import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const FormUsers = ({ 
  createNewUser, 
  uptadeInfo, 
  setUptadeInfo, 
  updateUserById, 
  setFormIsClose,
  setConfirmIsClose, 
  setWordConfirm
}) => {

  const { register, reset, handleSubmit } = useForm()

  useEffect(() => {
    reset(uptadeInfo)
  }, [uptadeInfo])
  

  const submit = data => {
    if (uptadeInfo) {
      //Update
      updateUserById('/users', uptadeInfo.id, data)
      setUptadeInfo()
      setWordConfirm('modified')
    }else{
      //Create
      createNewUser('/users' , data)
      setWordConfirm('registered')
    }
    reset({
      email: '', 
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setFormIsClose(true)
    setConfirmIsClose(false)
  }

  const handleExit = () => {
    reset({
      email: '', 
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setFormIsClose(true)
    setUptadeInfo()
  }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <div onClick={handleExit} className='form__x'>
        <i className='bx bx-x'></i>
      </div>
      <h2 className='form__title'>Form Users</h2>
      <div className='form__section'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' {...register('email')} id="email" type="text" required />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' {...register('password')} id="password" type="password" required />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' {...register('first_name')} id="first_name" type="text" required />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='form__input' {...register('last_name')} id="last_name" type="text"  required />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="birthday">Birthday</label>
        <input className='form__input' {...register('birthday')} id="birthday" type="date"  required />
      </div>
      <button className='form__btn'>{uptadeInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers



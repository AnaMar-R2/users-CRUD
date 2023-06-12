import React, { useState } from 'react'
import './styles/userCard.css'
import DeleteAlert from './DeleteAlert'

const UserCard = ({
  user, 
  deleteUserById, 
  setUptadeInfo, 
  setFormIsClose,
  setConfirmIsClose,
  setWordConfirm
}) => {

  const [alertDeleteIsClose, setAlertDeleteIsClose ] = useState(true)

  const handleOpenDelete = () => {
    setAlertDeleteIsClose(false)
  }

  const handleDelete = () => {
    deleteUserById( '/users', user.id)
    setAlertDeleteIsClose(true)
    setConfirmIsClose(false)
    setWordConfirm('removed')
  }

  const handleEdit = () => {
    setUptadeInfo(user)
    setFormIsClose(false)
  }

  return (
    <>
      <article className='user'>
        <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__items'>
          <li className='user__item'>
            <span className='user__label'>EMAIL</span>
            <span className='user__value'>{user.email}</span>
          </li>
          <li className='user__item'>
            <span className='user__label'>BIRTHDAY</span>
            <span className='user__value'>
              <i className='bx bx-gift' ></i>
              {user.birthday}
            </span>
          </li>
        </ul>
        <div className='user__buttons'>
          <button className='user__delete btn' onClick={handleOpenDelete}>
            <i className='bx bx-trash'></i>
          </button>
          <button className='user__update btn' onClick={handleEdit}>
            <i className='bx bx-pencil'></i>
          </button>
        </div>
      </article>
      <div className={`delete__container ${alertDeleteIsClose && 'delete__close'}`}>
        <DeleteAlert
          handleDelete={handleDelete}
          setAlertDeleteIsClose={setAlertDeleteIsClose}
        />
      </div>
    </>
  )
}

export default UserCard


import React from 'react'
import './styles/confirmModal.css'

const ConfirmModal = ({setConfirmIsClose, wordConfirm}) => {

  const handleCloseConfirm = () => {
    setConfirmIsClose(true)
  }

  return (
    <div className='confirm__card'>
      <div className='confirm__icon'>
        <i class='bx bx-check-circle'></i>
      </div>
      <p className='confirm__message'>The user has been successfully <span className='confirm__word'>{`${wordConfirm}`}</span></p>
      <button onClick={handleCloseConfirm} className='confirm__btn'>Ok</button>
    </div>
  )
}

export default ConfirmModal
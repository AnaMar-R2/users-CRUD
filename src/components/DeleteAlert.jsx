import React from 'react'
import './styles/deleteAlert.css'

const DeleteAlert = ({ handleDelete, setAlertDeleteIsClose }) => {
  const handleExit = () => {
    setAlertDeleteIsClose(true)
  }
  return (
    <div className='delete__card'>
      <div onClick={handleExit} className='delete__x'>
        <i className='bx bx-x'></i>
      </div>
      <div >
        <i className='bx bx-trash delete__trash' ></i>
      </div>
      <p className='delete__message'>Are you sure you want to remove this user from the database?</p>
      <div className='delete__buttons'>
          <button className='delete__button yes' onClick={handleDelete}>
            <span>Yes</span>
          </button>
          <button className='delete__button no' onClick={handleExit}>
            <span>No</span>
          </button>
        </div>
    </div>
  )
}

export default DeleteAlert
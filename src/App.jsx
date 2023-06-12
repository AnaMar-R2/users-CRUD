import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import ConfirmModal from './components/ConfirmModal'

function App() {

  const [uptadeInfo, setUptadeInfo] = useState()
  const [formIsClose, setFormIsClose] = useState(true)
  const [confirmIsClose, setConfirmIsClose] = useState(true)
  const [wordConfirm, setWordConfirm] = useState('')

  const baseUrl = 'https://users-crud.academlo.tech/'
  const [
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('/users')
  }, [])
  
  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <>
      <div className='app'>
        <header className='app__header'>
          <h1 className='app__title'>User CRUD</h1>
          <button className='app__operForm' onClick={handleOpenForm}>
            <i className='bx bx-plus'></i>
            <h3>Create New User</h3>
          </button>
        </header>
        <div className='users__container'>
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUptadeInfo={setUptadeInfo}
                setFormIsClose={setFormIsClose}
                setConfirmIsClose={setConfirmIsClose}
                setWordConfirm={setWordConfirm}
              />
            ))
          }
          <div onClick={handleOpenForm} className='user__add'>
            <span><i className='bx bx-plus'></i></span>
          </div>
        </div>
        <div className={`form__container ${formIsClose && 'form__close'}`}>
          <FormUsers
            createNewUser={createNewUser}
            uptadeInfo={uptadeInfo}
            updateUserById={updateUserById}
            setUptadeInfo={setUptadeInfo}
            setFormIsClose={setFormIsClose}
            setConfirmIsClose={setConfirmIsClose}
            setWordConfirm={setWordConfirm}
          />
        </div>
        <div className={`confirm__container ${confirmIsClose && 'confirm__close'}`}>
          <ConfirmModal
            setConfirmIsClose={setConfirmIsClose}
            wordConfirm={wordConfirm}
          />
        </div>
      </div>
      <footer className='app__footer'>
        <p className='app__footer__text'>Prepared by <span className='app__footer__span'>Ana Maria Ruiz</span> in Academlo</p>
      </footer>
    </>
  )
}

export default App


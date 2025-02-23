import { useState } from 'react'
import './App.css'


const users = [
  { "id": 1, "name": "Alex Adams", "age": 23 },
  { "id": 2, "name": "John Doe", "age": 25 },
  { "id": 3, "name": "Emily Smith", "age": 22 },
  { "id": 4, "name": "Michael Brown", "age": 30 },
  { "id": 5, "name": "Sarah Johnson", "age": 27 },
  { "id": 6, "name": "David Williams", "age": 24 },
  { "id": 7, "name": "Laura Miller", "age": 26 },
  { "id": 8, "name": "James Taylor", "age": 29 },
  { "id": 9, "name": "Sophia Davis", "age": 21 },
  { "id": 10, "name": "Daniel Moore", "age": 28 }
]


function App() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [modalOpen, setModalOpen] = useState(false) 

  const openModal = (user) => {
    setSelectedUser(user)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedUser(null)
    setModalOpen(false)
  }

  return (
    <div>
      {selectedUser || modalOpen ? null : (
        <center>
          <h1>No user data found</h1>
        </center>
      )
      }

      {modalOpen ? (
        <div className="modal-background">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h1>Selected User</h1>
            <div className="profile-container">
              <h1>{selectedUser?.name}</h1>
              <b>{selectedUser?.age} years old</b>
            </div>
            <button className="modal-btn" onClick={() => setSelectedUser(null)}>Remove selected user</button>
          </div>
        </div>
      ) : 
        null
      }

      <div className='container'>
        {
          users.map((user) => (
            <div
              key={user.id}
              className="profile-container"
              onClick={() => {
                setSelectedUser(user)
                openModal(user)
              }}
            >
              <h1>{user.name}</h1>
              <b>{user.age} years old</b>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default App

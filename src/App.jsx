// Лекция 79
// @ts-check
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import UsersList from './components/UsersList'
/** @type {import("./@types").User[]}*/
const defaultUsers = []
/** @type {import("./@types").Photo[]}*/
const defaultPhotos = []
/**
 * 
 * @returns 
 */
function App() {
  const [users, setUsers] = useState([defaultUsers])
  const [photos, setPhotos] = useState([defaultPhotos])
  const [showUser, setShowUser] = useState(false)
  const [userId, setUserId] = useState(0)
  useEffect(() => {
    async function getData() {
    try {
      const usersDb = (await axios.get ('https://jsonplaceholder.typicode.com/users')).data
      const { data: photosDb } = await axios.get ('https://jsonplaceholder.typicode.com/photos?albumId=1')
      setUsers(usersDb)
      setPhotos(photosDb)
    } catch (error) {
    console.log(error)
  }
}
  getData()
}, [])


useEffect(() => {
  const pageName = users.find(u => u.id === userId)?.name
  if (userId && showUser) {
    history.pushState({page: userId}, '', `/${userId}`)
    document.title = pageName
} else {
  history.pushState({page: 0}, 'Main', `/`)
  document.title = 'Main'
}
}, [showUser, userId])

useEffect(() => {
  /**
   * 
   * @param {PopStateEvent} event 
   */
  function popHandler(event) {
    /** @type {{page: number}} */
    const state = event.state
    console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}}`)
    if (state.page) {
      setUserId(state.page)
      setShowUser(true)
    } else {
      setShowUser(false)
    }
  }
  window.addEventListener('popstate', popHandler)
  return () => {
    window.removeEventListener('popstate', popHandler)
  }
}, [])


  return (
    <div className="App">
      {
        showUser
        ? <UserProfile {...{users, userId, photos, setShowUser}} />
        : <UsersList {... {users, setShowUser, setUserId  }} />
      }
    </div>
  )
}

export default App

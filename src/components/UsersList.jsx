// @ts-check
import React from 'react'
/**
 * UserList component
 * @param {import('../@types').UsersListProps}  props 
 */
export default function UsersList({ users, setShowUser, setUserId }) {
  console.log('UsersList')

  return (
    <ul>
      {
        users.map(user => {
          return <li key={user.id}>
            <a href={`/${user.id}`} onClick={e => {
              e.preventDefault()
              setUserId(user.id)
              setShowUser(true)
            }
            }>
              {user.name}
            </a>
        </li>
      })
    }
    </ul>
  )
}

// @ts-check
import './UserProfile.css'
/**
 * 
 * @param {import('../@types').UserProfileProps}  props 
 */

export default function UserProfile({users, userId, photos, setShowUser}) {
    const user = users.find(user => user.id === userId)
  return (
    <section>
        <h2>user profile</h2>
        <div className='userProfile'>
            <img src={photos[userId].thumbnailUrl} />
            <div className='userPrifileData'>
                <span>{user.name}</span>
                <span>{user.username}</span>
                <span>{user.email}</span>
                <span>{user.phone}</span>
                <span>{user.website}</span>
                <span>{user.address.street}</span>
            </div>
        </div>
        <button onClick={e => {setShowUser(false)
        }}>Back to main</button>
    </section>
  )
}

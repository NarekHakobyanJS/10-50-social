import React from 'react'
import userImg from '../../assets/user.png'
import './userCard.css'

const UserCard = ({user}) => {

  return (
    <div className='userCard'>
        <h3>{user.name}</h3>
        <b>{user.id}</b>
        <img src={user.photos.large === null ?  userImg : user.photos.large} />
        <button>follow</button>
    </div>
  )
}

export default UserCard
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunk, getPrfoileStatusThunk } from '../store/profileReducer'
import Loading from '../components/Loading/Loading'
import user from '../assets/user.png'

const ProfilePage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { profile, status, isFetching } = useSelector((state) => state.profilePage)


    useEffect(() => {
        dispatch(getProfileThunk(id))
        dispatch(getPrfoileStatusThunk(id))
    }, [id])
    return (
        <>
            {isFetching
                ?
                <Loading />
                :
                <div className='profilePage'>
                    <div className='nameAndPhoto'>
                        <h2>{profile?.fullName}</h2>
                        <img src={profile?.photos?.large !== null ? profile?.photos?.large : user} />
                        <h3>Status : {status}</h3>
                    </div>
                    <div className='description'>
                        <b>aboutMe : <i>{profile?.aboutMe}</i></b>
                        <hr />
                        <b>lookingForAJob : <i>{profile?.lookingForAJob === true ? "Open To Work" : "Close To Work"}</i></b>
                        <hr />
                        <b>lookingForAJobDescription : <i>{profile?.lookingForAJobDescription}</i></b>
                        <hr />
                        <b>userId : <i>{profile?.userId}</i></b>
                    </div>
                </div>
            }
        </>
    )

}

export default ProfilePage
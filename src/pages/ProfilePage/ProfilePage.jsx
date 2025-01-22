import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProfileThunk, getPrfoileStatusThunk, changeAvatarThunk } from '../../store/profileReducer'
import Loading from '../../components/Loading/Loading'
import UserStatus from '../../components/UserStatus/UserStatus'

import user from '../../assets/user.png'

import './ProfilePage.css'



const ProfilePage = () => {
    const { profile, isFetching } = useSelector((state) => state.profilePage)
    const { id } = useParams()
    const dispatch = useDispatch()

    const changeProfileAvatar = (e) => {
        const file = e.target.files[0]
        dispatch(changeAvatarThunk(file, localStorage.getItem('userId')))
    }

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
                        {
                            profile?.userId === +localStorage.getItem('userId') &&  <input type='file' onChange={changeProfileAvatar} />
                        }
                       
                        <UserStatus id={id} />

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
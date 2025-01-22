import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProfileThunk, getPrfoileStatusThunk, changeStatusThunk } from '../../store/profileReducer'

import Loading from '../../components/Loading/Loading'

import user from '../../assets/user.png'

import './ProfilePage.css'


const ProfilePage = () => {
    const { profile, status, isFetching } = useSelector((state) => state.profilePage)
    const [editeStatus, setEditeStatus] = useState(false);
    const [newStatus, setNewStatus] = useState(status)
    const { id } = useParams()
    const dispatch = useDispatch()
   

    useEffect(() => {
        setNewStatus(status)
    }, [status])

    useEffect(() => {
        dispatch(getProfileThunk(id))
        dispatch(getPrfoileStatusThunk(id))
    }, [id])

    const requestByStatus = () => {
        setEditeStatus(false)
        dispatch(changeStatusThunk(newStatus))
        
    }
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
                        <h3>Status : </h3>
                        {
                            editeStatus
                            ? 
                            <input 
                            onBlur={requestByStatus}
                            value={newStatus} 
                            onChange={(e) => setNewStatus(e.target.value)}/>
                            :
                            <h4 onDoubleClick={() => setEditeStatus(true)}>{newStatus}</h4>
                        }
                      
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
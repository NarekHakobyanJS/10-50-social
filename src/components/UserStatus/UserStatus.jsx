import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusThunk } from '../../store/profileReducer';

const UserStatus = ({id}) => {
    const dispatch = useDispatch()
    const { profile, status, isFetching } = useSelector((state) => state.profilePage)
    const [editeStatus, setEditeStatus] = useState(false);
    const [newStatus, setNewStatus] = useState(status)

    useEffect(() => {
        setNewStatus(status)
    }, [status])

    const requestByStatus = () => {
        setEditeStatus(false)
        dispatch(changeStatusThunk(newStatus, id))
        
    }

    return (
        <div>
            <h3>Status : </h3>
            {
                editeStatus
                    ?
                    <input
                        onBlur={requestByStatus}
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)} />
                    :
                    <h4 onDoubleClick={() => setEditeStatus(true)}>{newStatus}</h4>
            }

        </div>
    )
}

export default UserStatus
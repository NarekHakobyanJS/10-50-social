
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import './HomePage.css'
import { useAuth } from '../../hooks';


const HomePage = () => {
  const { userId } = useSelector((state) => state.auth)

  const bool = useAuth(userId)

  if (bool) {
    return <Navigate to={`/profile/${localStorage.getItem('userId')}`} />
  }


  return (
    <>
      <Navigate to='/login' />
    </>
  )
}

export default HomePage
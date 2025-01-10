import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersThunkCreator } from './store/usersReducer';


function App() {

  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.usersPage)

  console.log(users);
  

  useEffect(() => {
    dispatch(getAllUsersThunkCreator())
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;

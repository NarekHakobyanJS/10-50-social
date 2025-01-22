import { useRef, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../store/authReducer'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks'

import './LoginPage.css'


const LoginPage = () => {
    const dispatch = useDispatch()
    const { userId, errorMessage } = useSelector((state) => state.auth)

    const bool = useAuth(userId)
    

    const authorization = ({ email, password }) => {
        dispatch(loginThunk(email, password))
    }
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef?.current?.focus()
    }, [])


    if (bool) {
        return <Navigate to={`/profile/${localStorage.getItem('userId')}`} />
    }

    return (
        <div className='login-page'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(value) => authorization(value)}
            >
                <Form className='form'>
                    <Field className='login-input' name='email' placeholder='email' ref={inputRef} />
                    {errorMessage && <p>{errorMessage[0].error}</p>}
                    <Field className='login-input' name='password' placeholder='password' />
                    {errorMessage && <p>{errorMessage[1].error}</p>}
                    <button className='login-button' type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage
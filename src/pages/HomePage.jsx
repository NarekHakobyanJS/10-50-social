import React, { useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import './pages.css'

const HomePage = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div className='login-page'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(value) => console.log(value)}
      >
        <Form className='form'>
          <Field className='login-input' name='email' placeholder='email' ref={inputRef}/>
          <Field className='login-input' name='password' placeholder='password' />
          <button className='login-button' type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default HomePage
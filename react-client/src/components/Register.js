import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    logged: false
  })

  const onChangeHandler = (e) => {
    setRegisterData({
      ...registerData, 
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.passwordCheck) alert('passwords don\'t match');
    else {
      const newUser = {
        email: registerData.email,
        password: registerData.password
      }

      try {
        const response = await fetch(`/api/users`, {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const parsedUserResponse = await response.json()
        setRegisterData({
          ...registerData,
          logged: true
        })
      } catch (err) {
        console.log('Register User Error: ', err)
      }
    }
  }

  return (
    <Fragment>
      {
        registerData.logged &&
        <Redirect to='/'/>
      }
      <h4>Register</h4>
      <div className="container">
        <form className="form center-align" id="register-form" onSubmit={onSubmit}>
          <input type="email" placeholder="email" name="email" value={registerData.email} onChange={onChangeHandler} required/>
          <input type="password" placeholder="password" name="password" value={registerData.password} onChange={onChangeHandler} required/>
          <input type="password" placeholder="re-type password" name="passwordCheck" value={registerData.passwordCheck} onChange={onChangeHandler} required/>
          <input type="submit" className="submit-btn btn" value="Create Account"/>
        </form>
      </div>
    </Fragment>
  )
}

export default Register;
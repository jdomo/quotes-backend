import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '', 
    logged: false
  })

  const onChangeHandler = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      email: loginData.email,
      password: loginData.password
    }

    try {
      const response = await fetch(`/api/users/login`, {
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedLoginResponse = await response.json()
      console.log(parsedLoginResponse, '<--- parsed login response containing JWT')
      setLoginData({
        ...loginData,
        logged: true
      })

    } catch (err) {
      console.log('Register User Error: ', err)
    }
  }

  return (
    <Fragment>
      {
        loginData.logged &&
        <Redirect to='/'/>
      }

      <h4>Log In</h4>
      <div className="container">
        <form className="form center-align" id="register-form" onSubmit={onSubmit}>
          <input type="email" placeholder="email" name="email" value={loginData.email} onChange={onChangeHandler} required/>
          <input type="password" placeholder="password" name="password" value={loginData.password} onChange={onChangeHandler} required/>
          <input type="submit" className="submit-btn btn" value="Log In"/>
        </form>
      </div>
    </Fragment>
  )
}

export default Login;
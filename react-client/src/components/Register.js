import React, {Fragment, useState} from 'react';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    passwordCheck: ''
  })

  const onChangeHandler = (e) => {
    setRegisterData({...registerData, [e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.passwordCheck) console.log('passwords don\'t match');
    else {
      const newUser = {
        email: registerData.email,
        password: registerData.password
      }

      try {

        //body for backend post request
        const body = await JSON.stringify(newUser);

        const response = await fetch(`http://localhost:5000/api/users`, {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const parsedUserResponse = await response.json()
        console.log(parsedUserResponse, '<--- parsed user response containing JWT')

      } catch (err) {
        console.log(err, '<-- err from register onSubmit')
      }
    }
  }

  return (
    <Fragment>
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
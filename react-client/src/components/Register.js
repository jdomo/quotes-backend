import React, {Fragment} from 'react';

const Register = () => {
  return (
    <Fragment>
      <h3>Register</h3>
      <div className="container">
        <form className="center-align" id="register-form">
          <input type="email" placeholder="email" name="email"/>
          <input type="password" placeholder="password" name="password"/>
          <input type="submit" className="submit-btn btn" value="Create Account"/>
        </form>
      </div>
    </Fragment>
  )
}

export default Register;
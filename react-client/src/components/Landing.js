import React, {Component} from 'react';
import Navbar from './Navbar'
import Form from './Form'

class Landing extends Component {
  state = {
    submitted: false
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <p>Input your quote here!</p>
          <Form />
        </div>
      </div>
    )
  }
}

export default Landing;
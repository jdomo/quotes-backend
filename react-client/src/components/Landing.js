import React, {Component} from 'react';
import Form from './Form'

class Landing extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div className="container">
          <p id="instructions">Input your quote here!</p>
          <Form />
        </div>
      </div>
    )
  }
}

export default Landing;
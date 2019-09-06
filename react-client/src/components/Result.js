import React, {Component} from 'react';
import Navbar from './Navbar'

class Result extends Component {
  state = {
    submitted: false
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <p>Quote result here!</p>
        </div>
      </div>
    )
  }
}

export default Result;
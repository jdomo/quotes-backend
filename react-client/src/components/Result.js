import React, {Component} from 'react';

class Result extends Component {
  state = {
    submitted: false
  }

  render() {
    return (
      <div>
        <div className="container">
          <p>Quote result here!</p>
          <form action="/">
            <input type="submit" className="submit-btn btn" value="back"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Result;
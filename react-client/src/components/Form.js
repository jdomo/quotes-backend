import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Form extends Component {
  
  state = {
    submitted: false,
    quote: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.submitted && <Redirect to='/result'/>
        }
        <form onSubmit={this.handleOnSubmit}>
          <i class="fas fa-arrow-down"></i>
          <input type="text" id="input-quote" value={this.state.quote} name="quote" onChange={this.handleOnChange}/>
          <input type="submit" className="submit-btn btn" value="analyze"/>
        </form>
      </div>
    )
  }
}

export default Form;
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Form extends Component {
  
  state = {
    submitted: false,
    quote: '',
    quoteAnalysis: []
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.quote, '<--this.state.quote')
    const response = await fetch(`http://localhost:5000/api/quotes/analyze`, {
      method: 'POST',
      // credentials: 'include',
      body: JSON.stringify({quote: this.state.quote}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response, '<-- response in handleSubmit')
    const parsedResponse = await response.json();
    console.log(parsedResponse, '<---parsedResponse')
    this.setState({
      submitted: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.submitted && 
          <Redirect to={{
            pathname: '/result',
            state: {quoteAnalysis: this.state.quoteAnalysis}
          }}/>
        }

        <form onSubmit={this.handleOnSubmit}>
          <i className="fas fa-arrow-down"/>
          <input type="text" id="input-quote" value={this.state.quote} name="quote" onChange={this.handleOnChange}/>
          <input type="submit" className="submit-btn btn" value="analyze"/>
        </form>
      </div>
    )
  }
}

export default Form;
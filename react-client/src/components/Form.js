import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// import { threadId } from 'worker_threads';

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
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();

    //clean up entered quote
    if (this.state.quote.includes('"') || this.state.quote.includes("'")) {
      let quote = this.state.quote;
      while (quote.includes('"') || quote.includes("'")) {
        quote = quote.replace('"', '');
        quote = quote.replace("'", '');
      }
      this.setState({quote})
    }

    const response = await fetch(`/api/quotes/analyze`, {
      method: 'POST',
      body: JSON.stringify({quote: this.state.quote}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedResponse = await response.json();
    this.setState({
      submitted: true,
      quoteAnalysis: parsedResponse.data
    })
  }

  render() {

    return (
      <div>
        {
          this.state.submitted && 
          <Redirect to={{
            pathname: '/result',
            state: {
              quote: this.state.quote,
              quoteAnalysis: this.state.quoteAnalysis
            }
          }}/>
        }

        <form onSubmit={this.handleOnSubmit}>
          <i className="fas fa-arrow-down"/>
          <input type="text" id="input-quote" autoComplete="off" value={this.state.quote} name="quote" onChange={this.handleOnChange}/>
          <input type="submit" className="submit-btn btn" value="analyze"/>
        </form>
      </div>
    )
  }
}

export default Form;
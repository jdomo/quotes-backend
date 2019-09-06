import React, {Component} from 'react';

class Form extends Component {
  
  state = {
    quote: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <i class="fas fa-arrow-down"></i>
        <input type="text" id="input-quote" value={this.state.quote} name="quote" onChange={this.handleOnChange}/>
        <input type="submit" className="submit-btn btn" value="analyze"/>
      </form>
    )
  }
}

export default Form;
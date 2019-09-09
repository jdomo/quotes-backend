import React, {Component} from 'react';

const Result = (props) => {

  const resultsList = props.location.state.quoteAnalysis.map((item, index) => {
    console.log(item.score)
    return (
      <li key={index} className="results-item">
        {`${item.name} -- ${Math.floor(item.score * 100)}% match`}
      </li>
    )
  })

  console.log(resultsList)
  return (
    <div>
      <div className="container">
        <h3>{`\"${props.location.state.quote}\"`}</h3>
        <p id="results-header">Results</p>
        <ul id="results-list">
          {resultsList}
        </ul>
        <form action="/">
          <input type="submit" className="submit-btn btn" value="back"/>
        </form>
      </div>
    </div>
  )
}

export default Result;
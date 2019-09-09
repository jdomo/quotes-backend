import React, {Component} from 'react';

const Result = (props) => {

  const resultsList = props.location.state.quoteAnalysis.map((item, index) => {
    return (
      <li key={index} className="results-item">
        {`${item.name} ----> ${Math.floor(item.score * 100)}% match`}
      </li>
    )
  })

  return (
    <div>
      <div className="container">
        <h3>{`"${props.location.state.quote}"`}</h3>
        <div id="results-div">
          <p id="results-header">Results</p>
          <ul id="results-list">
            {resultsList.length ? 
              resultsList 
              : "No tone detected. Try a longer quote - no jibberish."}
          </ul>
        </div>
        <form action="/">
          <input type="submit" className="submit-btn btn" value="back"/>
        </form>
      </div>
    </div>
  )
}

export default Result;
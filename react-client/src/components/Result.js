import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from './Chart'

const Result = (props) => {

  const resultsList = props.location.state.quoteAnalysis.map((item, index) => {
    return (
      <li key={index} className="results-item">
        {`${item.name}`}<br/><span id="results-number">{`${Math.floor(item.score * 100)}% `}</span>match<br/><br/>
      </li>
    )
  })

  return (
    <div>
      <div className="container">
        <h3 id="results-quote">{`"${props.location.state.quote}"`}</h3>
        <div id="results-div">
          <p id="results-header">Results</p>
          <ul id="results-list">
            {resultsList.length ? 
              resultsList 
              : "No tone detected. Try a longer quote - no jibberish."}
          </ul>
        </div>
        {resultsList.length &&   
          <div id="chart-div">
            <Chart quoteData={props.location.state.quoteAnalysis}/>
          </div>
        }
        <Link to="/">
          <input type="submit" className="submit-btn btn" value="back"/>
        </Link>
      </div>
    </div>
  )
}

export default Result;
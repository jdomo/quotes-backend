import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

const Chart = (props) => {  
  const labels = props.quoteData.map(item => {
    return item.name
  })

  const scores = props.quoteData.map(item => {
    return item.score
  })
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Quote Results',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        color: 'rgba(255,255,255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: scores
      }
    ]
  };

  console.log(props.quoteData, '<--props in Chart.js')
  return (
    <Bar
      data={data}
      width={50}
      height={25}
      options={{
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            barThickness: 60,
          }],
          yAxes: [{
            ticks: {
              color: 'rgba(255,255,255)',
              beginAtZero: true
            }
          }]
        }
      }}
    />
  )
}

// export default React.createClass({
//   displayName: 'BarExample',
//   render() {
//     console.log(this.props, '<---props in Chart.js')
//     return (
//       <div>
//         <h2>Bar Example (custom size)</h2>
        // <Bar
        //   data={data}
        //   width={100}
        //   height={50}
        //   options={{
        //     maintainAspectRatio: false
        //   }}
        // />
//       </div>
//     );
//   }
// });

export default Chart;
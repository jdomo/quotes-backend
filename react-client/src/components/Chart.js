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
        label: 'match %',
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
        legend: {
          labels: {
            fontColor: 'rgba(255,255,255)'
          }
        },
        scales: {
          xAxes: [{
            barThickness: 60,
              ticks: {
                fontColor: 'rgba(255,255,255)'
              }
          }],
          yAxes: [{
            ticks: {
              fontColor: 'rgba(255,255,255)',
              beginAtZero: true,
              suggestedMax: 1.0
            }
          }]
        }
      }}
    />
  )
}

export default Chart;
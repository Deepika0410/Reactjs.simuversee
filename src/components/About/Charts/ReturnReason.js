import React from 'react';

import { Bar, HorizontalBar } from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.min.css";

function ReturnReason() {
    const dataHorBar = {
      labels: ['The size/fit/color was wrong',
    'The item was damaged/broken or no longer functional',
  'The product was not depicted in its description or product photo',
               'I did not like it',
               'I changed my mind',
               'The package did not arrive in time for my needs or the package was late',
                'I intended to return when I purchase'],
      datasets: [
        {
          label: 'Returns to amazon',
          backgroundColor: 'rgba(137, 196, 244)',
          // borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75, 119, 190,0.7)',
          hoverBorderColor: 'rgba(52, 45, 113,1)',
          data: [34, 21,14,10,9,5,3],
          barThickness: 20
        },
        {
          label: 'Returns to other retailers',
          backgroundColor: 'rgb(127,255,0)',
          // borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgb(50,205,50, 0.4)',
          hoverBorderColor: 'rgba(173,255,47,1)',
          data: [46,15,15,9,7,3,3],
          barThickness: 20
        }
      ]
    };
    
const options = {
    maintainAspectRatio: false,
 
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: "General SMS - 150"
    },
    // layout: {
    //   padding: 50
    // },
    datalabels: {
      font: {
        weight: "bold"
      },
    //   align: "end",
    //   anchor: "end",
      // formatter: function (value, context) {
      //   return context.chart.formattedData[context.dataIndex];
      // }
    }
  }
}
  return (
    <div>
     
        <p style={{textAlign:"center", fontSize:"5vh", color:"#ff6633"}}>My #1st Reason for Returning</p>
        <div style={{height:"70vh"}}>
        <Bar
        data={dataHorBar} 
        options={options}
        />
        </div>
      </div>
  )
}

export default ReturnReason
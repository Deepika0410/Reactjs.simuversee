import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Cards from './Cards';

function Retail() {
    const dataBar = {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2025','2030'],
      datasets: [
        {
          label: 'GMV in Billion$',
          backgroundColor: 'rgba(137, 196, 244)',
          // borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75, 119, 190,0.7)',
          hoverBorderColor: 'rgba(52, 45, 113,1)',
          data: [12.4, 16, 21.7, 27.1, 38, 55, 140, 350]
        },
        
      ]
    };
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Online Retail boom</h1>

    <h4>Gross Merchandise Value(GMV) for e-retail sector(in $bn)</h4>
    <div style={{height:"70vh", padding:"2%", justifyContent:"center"}}>
        <Bar
          data={dataBar}
        //   width={100}
        //   height={50}
           options={{maintainAspectRatio: false}}
        />
      
        </div>
        <Cards />
    </div>
  )
}

export default Retail
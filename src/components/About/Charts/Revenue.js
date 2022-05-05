import React from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




 const Revenue = () => {
    const data = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  responsive:"true",
 
  datasets: [
    {
      label: "Bags and Accessories",
      backgroundColor: "rgb(173,255,47)",
      barThickness: 40,
      categoryPercentage: 1,
      pointStyle: "triangle",
      data:[130,150,160,165,170,180,190,210]
    },
    {
      label: "Footwear",
      pointStyle: "rectRounded",
      backgroundColor: "#6ED3FF",
      barThickness: 40,
      categoryPercentage: 1,
      data: [200, 220, 260, 280,310,330,350,380]
    },
    {
      label: "Apparel",
      backgroundColor: "#1497FF",
      barThickness: 40,
      categoryPercentage: 1,
      pointStyle: "triangle",
      data:[437, 528, 666, 750, 837, 907,954, 1002]
    }
  ]
};
const options ={
  offsetGridLines: true,
          drawTicks: true,
          layout: {
            padding: {
              top: 30,
              right: 40,
              bottom: 40
            }
          },
          legend: {
            display: true,
            position: "top",
            align: "center",
            labels: {
              usePointStyle: true
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                stacked: false,
                gridLines: {
                  drawBorder: false
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 10,
                  // callback(n) {
                  //   if (n < 1e3) return n;
                  //   if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  // }
                }
              }
            ]
          }

}
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Revenue Fashion Market in B$( Billion Dollars)</h1>
    <div>
    <div style={{height:"70vh", width:"100vw"}}>
      <Bar
        pointStyle="star"
        data={data}
        options={options}
      />
      </div>
    </div>
    </div>
  );
}

export default Revenue
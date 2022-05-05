import React from 'react';
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-style";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function Return() {
    

    const colors = ['black', '#4473c4','#6699CC','rgb(34,139,34)','#FFFF00'];
const data = {
  labels: ["Clothing/Shoes", "Accessorires/Jewellery","Electronics", "Health & Beauty", "Entertainment"],
  datasets: [
    {
      label: "Data",
      data: [67.8, 20, 60, 50, 40],
      backgroundColor: colors,
      borderColor: "transparent",
      barThickness: 50
    },
    
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
    layout: {
      padding: 50
    },
    datalabels: {
      font: {
        weight: "bold"
      },
      align: "end",
      anchor: "end",
      // formatter: function (value, context) {
      //   return context.chart.formattedData[context.dataIndex];
      // }
    }
  }
};
  return (
    <div>
        <p style={{textAlign:"center", fontSize:"5vh", color:"#ff6633"}}>Most Frequently Returned Online Product Categories</p>
      <div style={{height:"60vh"}}>
        <Bar data={data} options={options} />
      </div>
      </div>
  )
}

export default Return
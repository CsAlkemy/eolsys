import React from 'react';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const StackedChart = () => {
  const taskList = useSelector(store => store.tasks)
    Chart.register(ChartDataLabels)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
    )
    var coloR = [];

    var dynamicColors = function() {
       var r = Math.floor(Math.random() * 255);
       var g = Math.floor(Math.random() * 255);
       var b = Math.floor(Math.random() * 255);
       return "rgb(" + r + "," + g + "," + b + ")";
    };
    for (const i in taskList) {
       coloR.push(dynamicColors(i));
    }

    const AllTime=[]
    for(let i=0; i<taskList.length; i++)  {
        AllTime.push(parseInt(taskList[i]?.taskTime))
    }

    const sortedAllTime = AllTime.sort((a, b) => a - b);
    let count = 0;
    const CustomData =[]
    for (let i = 0; i < sortedAllTime.length; i++) {
      count += sortedAllTime[i];
      if (count < 60) {
        const dataNew = {
          label:"Task" + (i + 1),
          data:[parseInt(sortedAllTime[i])],
          backgroundColor:coloR[i]
        }
        CustomData.push(dataNew);
        coloR.push(dynamicColors());
      }
    }

    const options = {
        plugins:{
        datalabels: {
            color: '#000000',
            labels: {
                title: {
                    font: {
                    size:"16px"
                    }
                },
                }
        },
        },
        responsive: true,
        scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            suggestedMin: 1,
            suggestedMax: 60,
        },
        },
    };
  
  const labels = ['Tasks'];
  const data = {
    labels,
    datasets: CustomData
  };
  return(
    <Bar options={options} data={data} />
  )
}

export default StackedChart;
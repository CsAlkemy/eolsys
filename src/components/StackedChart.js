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
//import { useSelector } from 'react-redux';

const StackedChart = () => {
    Chart.register(ChartDataLabels)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
    )
    // const taskList = useSelector(store => store.tasks)

    // const [chartData, setChartData] = React.useState ({
    //     label: '',
    //     data: [],
    //     backgroundColor: '',
    // })

   
    // const dataList =[];
    // React.useEffect (()=>{
    //     for(let i=0; i<taskList.length; i++) {
    //         setChartData ({
    //             label:taskList[i]?.taskName,
    //             data: [taskList[i]?.taskList],
    //             backgroundColor:"hello"
    //         })
    //         dataList.push(chartData);
    //     }
    // },[0])

    // console.log(dataList);
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
    datasets: [
      {
        label: 'Task 1',
        data: [10],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Task 2',
        data: [20],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Task 3',
        data: [5],
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };
  return(
    <Bar options={options} data={data} />
  )
}

export default StackedChart;
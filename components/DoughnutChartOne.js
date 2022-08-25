import { Chart, Doughnut } from "react-chartjs-2"
import { useState } from 'react'
import ChartDataLabels from 'chartjs-plugin-datalabels';


const DoughnutChartOne = ({ rangeValues, labels }) => {
  const [ chartData, setChartData ] = useState({
        labels: labels,
        hoverOffset: 25,
        datasets: [
          {
            backgroundColor: ["#B1D9C3","#F6C900","#EB5E54", "#C4222A","#6FB6BA"],
            data: rangeValues,
    
          }
        ],
        
      });
  const [ chartOptions, setChartOptions ] = useState({
    responsive: true,
    maintainAspectRatio: true,
    plugins:{
          datalabels: {
            color: 'white',
            backgroundColor: '#0f0f0f66',
            padding: 6,
            align: 'start',
            borderRadius: 5,
            offset: 0,
            formatter: function (value, context) {
                // If the value of this slider is more than 0, show the label for that segment (if it's 0 it will be 1px wide and look strange)
                return context.chart.data.datasets[0].data[context.dataIndex] > 0 ? 
                       `£${context.chart.data.datasets[0].data[context.dataIndex]}` : 
                       null;
            },
          },
        legend: {
            border: 0,
            display: true,
            position: 'top',
            align: 'center',
            labels:{
                boxWidth: 20,
                boxHeight: 14,
                padding: 14,
                font: {
                    size: 14,
                }
            },
        }
      }
  });




  return (
    <Doughnut className="max-w-full" data={chartData} plugins={[ChartDataLabels, {
      beforeInit(chart) {
        // Get reference to the original fit function
        const originalFit = chart.legend.fit;
    
        // Override the fit function
        chart.legend.fit = function fit() {
          // Call original function and bind scope in order to use `this` correctly inside it
          originalFit.bind(chart.legend)();
          // Change the height as suggested in another answers
          this.height += 20;
        }
      }
    }]} options={chartOptions} ></Doughnut>
  )
}

export default DoughnutChartOne;
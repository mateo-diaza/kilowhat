import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = [ 'Power', 'Temperature', 'Humidity'];

export const data2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'PC',
      data: [600, 200, 900, 300, 800, 500, 100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        fill: true,
        label: 'Dataset 3',
        data: [400, 800, 100, 700, 200, 500, 900],
        borderColor: 'rgb(178,34,34)',
        backgroundColor: 'rgb(255,0,0)',
    }
  ],
};


interface IProps {
  children?: JSX.Element
}

const Targets: React.FC<IProps> = () => {
  return <Line options={options} data={data} />;
}

export default Targets;
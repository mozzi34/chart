'use client'; // 클라이언트 컴포넌트임을 명시

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

//기본 Line 차트
//https://react-chartjs-2.js.org/examples/line-chart

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; //x축 기준

export const data = {
  labels,
  datasets: [
    {
      label: '분류 1', //그래프 분류되는 항목
      data: [1, 2, 3, 4, 5, 6, 7], //실제 그려지는 데이터(Y축 숫자)
      borderColor: 'rgb(255, 99, 132)', //그래프 선 color
      backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
    },
    {
      label: '분류 2',
      data: [2, 3, 4, 5, 4, 7, 8],
      borderColor: 'rgb(53, 162, 235)', //실제 그려지는 데이터(Y축 숫자)
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function LineChart() {
  return (
    <div className='contentWrap'>
      <div className='contentInner'>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

import React from 'react';
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from "react-chartjs-2";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const Chart = () => {
    // const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = {
        labels: ['فروردین 1399', 'اردیبهشت 1399', 'خرداد 1399', 'تیر 1399', 'مرداد 1399', 'شهریور 1399'],
        datasets: [
            {
                label: "Sales Value",
                data: ['1', '1.3', '1.7', '1.2', '1.4', '2', '1.6'],
                backgroundColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderColor: 'rgb(20, 7, 75)',
                hoverBackgroundColor: '#f00',
            },
        ],
    }

    return (
        <Bar
            // height={60}
            // width={60}
            data={data}
            borderColor="rgb(20, 7, 75)"
        />
    );
}

export default Chart;
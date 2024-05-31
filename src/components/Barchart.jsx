import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Dropdown from './Dropdown';
import Chart, { scales } from 'chart.js/auto';

const Barchart = () => {
    const [timeRange, setTimeRange] = useState('1 month');

    const handleSelect = (range) => {
        setTimeRange(range);
        // Logic to update the data based on range
    };

    // Sample data (you can replace this with your dynamic data)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales',
                data: [10020, 19000, 3000, 52000, 12000, 3000, 2000, 1050, 8000, 700, 1004, 120],
                backgroundColor: 'rgba(75, 192, 192)',
            },
            {
                label: 'Purchases',
                data: [10520, 22000, 6000, 56000, 18000, 4000, 3000, 2500, 8200, 2000, 1200, 5000],
                backgroundColor: 'rgba(153, 102, 255)',
            },
        ],
    };

    const options = {
        scales: {

        },
        plugins: {
            colors: {
                enabled: false
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsiveAnimationDuration: 1,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 0
        },
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                },
            }
        },

    };

    useEffect(() => {
        Chart.defaults.font.family = 'Arial';
    }, []);

    return (
        <div className='bg-white rounded-lg border h-auto'>
            <div className='flex items-center justify-between mx-auto p-4 bg-gray-100 rounded-lg shadow-md'>
                <h1 className='text-lg font-bold'>Sales & Purchases</h1>
                <Dropdown onSelect={handleSelect} />
            </div>
            <div className='h-[300px] p-4'>
                <Bar data={data} options={options} />
            </div>
        </div >
    );
};

export default Barchart;

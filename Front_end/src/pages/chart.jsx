import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../../src/assets/css/chart.css';

const Chart = () => {
    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            colors: ['#1d4ed8']
        },
        title: {
            text: 'Helpee joined',
            align: 'left',
            style: {
                fontSize: '20px',
                color: '#333'
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "" + val + ""
                }
            }
        }
    };

    const series = [{
        name: 'Helpees',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100, 120, 150]
    }];

    return (
        <div className="chart-container">
            <a href="/sidebar" className="back-buttonx">Back</a>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
}

export default Chart;

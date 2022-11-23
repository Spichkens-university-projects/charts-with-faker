import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import React, {FC} from 'react';
import {Bar} from 'react-chartjs-2';
import {IUser} from "../types/user.interface";
import {chart_watermark} from "./watermark";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    chart_watermark
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
    },
};


interface Props {
    users: IUser[]
}

const BarChart: FC<Props> = ({users}) => {

    const cities: string[] = users.map(user => user.city)

    const data = {
        labels: cities,
        datasets: [
            {
                label: 'Dataset 1',
                data: cities.map(city => users.filter(user => city === user.city).length),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    return <Bar options={options} data={data}/>;
}

export default BarChart
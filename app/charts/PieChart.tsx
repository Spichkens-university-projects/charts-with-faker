import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import React, {FC, PropsWithChildren} from 'react'
import {Pie} from 'react-chartjs-2';
import {IUser} from "../types/user.interface";
import {chart_watermark} from "./watermark";

ChartJS.register(ArcElement, Tooltip, Legend, chart_watermark);

interface Props {
    users: IUser[]
}

const generateRandomColors = (length: number): string[] => {
    let colors: string[] = []
    var o = Math.round, r = Math.random, s = 255;
    for (let i = 0; i < length; i++) {
        colors.push('rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')')
    }
    return colors
}

const PieChart: FC<PropsWithChildren<Props>> = ({users}) => {

    const names = users.map(user => user.username)

    const data = {
        labels: names,
        datasets: [
            {
                label: 'Names',
                data: names.map(name => users.filter(user => user.username === name).length),
                backgroundColor: generateRandomColors(names.length),
                borderColor: generateRandomColors(names.length),
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data}/>

}

export default PieChart
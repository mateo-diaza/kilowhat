import React, { useState, useMemo, useEffect } from 'react';
import useFetch from '@/hooks/useFetch';

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
    Color,
    Colors,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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

export interface IProps {
    sensorId: number;
    objective: number
    graphicTitle?: string
    lineColor?: Color
}

const EmissionGraphic: React.FC<IProps> = ({ sensorId, objective, graphicTitle, lineColor}: IProps) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                label: 'Graphics of emissions'
            },
        },
    };

    const [data, setData] = useState<Array<{created_at: Date, value: number}> | null>(null);

    const { response: response } = useFetch(`/api/controllers/emissions?sensorid=${sensorId}`);
    console.log(response);

    useEffect(() => {
        if(response) {
            setData(response)
        }
    }, [response]);

    const labels: Array<string> = useMemo(() => {
        if (!data) { return []; }
        return data
            .map((v: {created_at: Date})=> new Date(v.created_at))
            .filter((v) => v)
            .map((v: Date) => v.toLocaleDateString('es-ES'));
    }, [data]);

    const values: Array<number> = useMemo(() => {
        if (!data) { return []; }
        return data
            .map((v: {value:number})=> v.value)
            .filter((v) => v);
    }, [data]);

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Objective',
            data: labels.map(() => objective),
            fill: false,
            borderColor: 'red',
            tension: 0.6,
            pointRadius: 0
        },    
        {
            label: graphicTitle,
            data: values,
            fill: false,
            borderColor: lineColor,
            tension: 0.6
        }]
    };

    if (!values || !labels) { return (<></>)}
    return (
        <div>
            <Line options={options} data={chartData} />
        </div>
    );
}

export default EmissionGraphic;
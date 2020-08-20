import React, {useState, useEffect}  from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import { CSSTransition } from 'react-transition-group';

import styles from './Charts.module.css';

const Charts = ({ data: {confirmed, recovered, deaths}, country }) => {
    
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);
    
    const lineChart = (
        dailyData.length
        ? (
            <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    backgroundColor: 'rgba(128, 128, 255, 0.1)',
                    fontSize: 20,
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }],
            }}
            options={{
                scales: {
                    yAxes: [{ticks: {fontSize: 20, fontFamily: "'Playfair Display', serif", fontColor: '#000', fontStyle: '500'}}],
                    xAxes: [{ticks: {fontSize: 20, fontFamily: "'Playfair Display', serif", fontColor: '#000', fontStyle: '500'}}],
                    labels: [{ticks: {fontSize: 20, fontFamily: "'Playfair Display', serif", fontColor: '#000', fontStyle: '500'}}]
                }
            }}
        />) : null
    );
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: 
                        ['Infected', 'Recovered', 'Deaths'], 
                    datasets: [{
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { 
                        display: true, 
                        text: `Current info on ${country}`,
                        fontSize: 20,
                        fontFamily: `'Playfair Display', serif`
                    },
                    scales: {
                        yAxes: [{ticks: {fontSize: 20, fontFamily: "'Playfair Display', serif", fontColor: '#000', fontStyle: '500'}}],
                        xAxes: [{ticks: {fontSize: 20, fontFamily: "'Playfair Display', serif", fontColor: '#000', fontStyle: '500'}}]
                    }
                }}
            />
        ) : null
    )


    return (
            <div className={styles.container}>
                { country ? barChart : lineChart }
            </div>
    );
}

export default Charts;
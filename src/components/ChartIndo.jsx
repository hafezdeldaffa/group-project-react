import React, { useState,  useContext, useEffect } from 'react';
import { IndonesiaDailyContext } from '../context/IndonesiaDailyContext';
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryGroup, VictoryLabel
} from 'victory';

const ChartIndo = () => {
    const [DailyCases] = useContext(IndonesiaDailyContext);
    console.log(DailyCases)
    let chartData = []
    let chartData2 = []
    let date = []

    useEffect(() => {
        chartData = DailyCases.map(e => {
            return e.positif
        })

        chartData2 = DailyCases.map(e => {
            return e.sembuh
        })

        date = DailyCases.map(e => {
            return e.tanggal.substring(0, 10)
        })
    }, DailyCases);

    const data1 = [

        { quarter: 1, earnings: chartData[0] },
        { quarter: 2, earnings: chartData[1] },
        { quarter: 3, earnings: chartData[2] },
        { quarter: 4, earnings: chartData[3] },
        { quarter: 5, earnings: chartData[4] },
        { quarter: 6, earnings: chartData[5] },
        { quarter: 7, earnings: chartData[6] },
    ];

    const data2 = [
        { quarter: 1, earnings: chartData2[0] },
        { quarter: 2, earnings: chartData2[1] },
        { quarter: 3, earnings: chartData2[2] },
        { quarter: 4, earnings: chartData2[3] },
        { quarter: 5, earnings: chartData2[4] },
        { quarter: 6, earnings: chartData2[5] },
        { quarter: 7, earnings: chartData2[6] },
    ];
    return (
        <div className='container'>
            <div className="card shadow border-0">
                <div class="row">
                    <div class="col-1">
                        <img
                            className='rounded mx-auto d-block mt-2'
                            src='/images/analytics.png'
                            alt='People'
                            style={{ width: '36px' }}
                        />
                    </div>
                    <div class="col-11">
                        <h4 className='mt-3'>Grafik Covid 7 Hari Terakhir</h4>
                    </div>
                </div>
                <VictoryChart
                    // adding the material theme provided with Victory
                    padding={{ top: 5, bottom: 30, left: 60, right: 60 }}
                    width={400}
                    height={100}
                    theme={VictoryTheme.material}
                    domainPadding={20}
                >
                    <VictoryAxis
                        height={100}
                        tickValues={[1, 2, 3, 4, 5, 6, 7]}
                        tickFormat={date}
                        style={
                            {
                                tickLabels: { fontSize: 5 }
                            }
                        }
                    />
                    <VictoryAxis
                        style={{ tickLabels: { fontSize: 5 } }}
                        dependentAxis
                        tickValues={[200, 400, 600, 800, 1000, 1200, 1400]}
                        tickFormat={(t) => `${Math.round(t)}`}
                    />
                    <VictoryGroup offset={12}
                        colorScale={"qualitative"}

                        labels={() => ["Positif", "Sembuh"]}
                        style={{ labels: { padding: 0, fontSize: 5 } }}
                        labelComponent={
                            <VictoryLabel
                                dy={-2}
                                textAnchor="end"
                                verticalAnchor="end"
                            />
                        }>
                        <VictoryBar
                            barRatio={0.35}
                            style={{ data: { fill: "#F16133" } }}
                            animate={{
                                duration: 3000,
                                onLoad: { duration: 1000 }
                            }}
                            data={data1}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            barRatio={0.35}
                            style={{ data: { fill: "#38A3A5" } }}
                            animate={{
                                duration: 3000,
                                onLoad: { duration: 1000 }
                            }}
                            data={data2}
                            x="quarter"
                            y="earnings"
                        />
                    </VictoryGroup>
                </VictoryChart>
            </div>
        </div>
    )
}

export default ChartIndo;
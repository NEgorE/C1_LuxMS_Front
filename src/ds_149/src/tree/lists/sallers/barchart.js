import React, { useEffect, useState } from "react";
import { subscriberCategoryName1 } from '../../../../CrossFilter';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell} from 'recharts';

import {
    getEmployeeInfoBars
  } from '../../../controllers/DataController';

export const Barchart = (props) => {

    const log_prefix = 'Barchart: '

    const currFilter1 = subscriberCategoryName1._value

    const [chart3, setChart3] = useState(false)
    const [chart3data, setchart3data] = useState(false)

    useEffect(() => {
        getChart3Data();
    }, [])

    useEffect(() => {
        console.log('Bar data')
        console.log(chart3data)
        if(chart3data){
            generateChart3(chart3data);
        }
    }, [chart3data])

    useEffect(() => {
        
        getChart3Data();
    }, [currFilter1])

    function getChart3Data() {
        let result = false;
        var filter1 = false;

        if (currFilter1 === '' || !currFilter1) {
            filter1 = 'Все категории'
        }
        else {
            filter1 = currFilter1
        }
        console.log(`filter for req for bars : ${filter1}`)

        getEmployeeInfoBars({
            filter: filter1
        }).then(res => {
            setchart3data(res)
        })
    };

    function generateChart3(data) {
        const dMin = 0;
        const element = [
            <div class='row mh-10'>
                <p class='chart-title '>Sum VOL by EmpNAME</p>
            </div>, 
            <div class='row mh-90'>
                <ResponsiveContainer width={'100%'} height={400}>
                    <BarChart
                        data={data}
                        margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5,
                        }}
                    >
                        <XAxis dataKey="empName" interval={0} tickSize={11} height={40} type="category" tickLine={false} axisLine={false}/>
                        <Bar dataKey="vol" radius={7} isAnimationActive={false}> 
                            <LabelList dataKey="vol" position="top" fill="#000" />
                            {data.map((entry, index) => (
                                console.log(entry.isDeclined),
                                <Cell cursor="pointer" fill={entry.isDeclined} key={`cell-${index}`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>       
            </div> 
        ];
        setChart3(element);
    }

    return (
        chart3 ? chart3 : 'Smth wrong'
    )
}
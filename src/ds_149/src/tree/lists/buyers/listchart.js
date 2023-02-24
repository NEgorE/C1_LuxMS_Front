import React, { useEffect, useState } from "react";
import { subscriberCategoryName1 } from '../../../../CrossFilter';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell} from 'recharts';

import {
    getEmployeeInfoBars
  } from '../../../controllers/DataController';

export const ListChart = (props) => {

    const log_prefix = 'Barchart: '

    const currFilter1 = subscriberCategoryName1._value

    const [listChart, setListChart] = useState(false)
    const [chart3data, setchart3data] = useState(false)


    //useEffect(() => {
    //    getChart3Data();
    //}, [])
//
    //useEffect(() => {
    //    if(chart3data){
    //        generateChart3(chart3data);
    //    }
    //}, [chart3data])
//
    //useEffect(() => { 
    //    getChart3Data();
    //}, [currFilter1])

    //function getChart3Data() {
        //var filter1 = false;
//
        //if (currFilter1 === '' || !currFilter1) {
        //    filter1 = 'Все категории'
        //}
        //else {
        //    filter1 = currFilter1
        //}
//
        //getEmployeeInfoBars({
        //    filter: filter1
        //}).then(res => {
        //    setchart3data(res)
        //})
    //};

    function generateChart3() {
        const dMin = 0;
        const element = [
            <div class='row mh-10'>
                <p class='chart-title '>Sum VOL by Chops</p>
            </div>, 
            <div class='row mh-90'>
                <div class='col col-8 h-100 cobj' >
                    <div class='col obj h-100'>
                        List
                    </div>
                </div>
                <div class='col col-4 h-100 cobj' >
                    <div class='col obj h-100'>
                        Pie
                    </div>
                </div>
            </div> 
        ];
        setChart3(element);
    }

    return (
        chart3 ? chart3 : 'Smth wrong'
    )
}
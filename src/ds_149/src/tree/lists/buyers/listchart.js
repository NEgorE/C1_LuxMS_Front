import React, { useEffect, useState } from "react";
import { 
    subscriberCountryName1,
    subscriberCategoryName1
} from '../../../../CrossFilter';
import { PieCircle } from "../../../../../ds_res/src/Components/PieChart";
import { DeliveryRow } from '../../../../../%%ds_149/src/components/DeliveryRow';
import { CustomLegend } from "../../../../../ds_res/src/Components/CustomLegend/CustomLegend";

import {
    getDeliveryFreightData
  } from '../../../controllers/DataController';

export const ListChart = (props) => {

    const log_prefix = 'ListChart: '

    const currFilter1 = subscriberCountryName1._value
    const currFilter0 = subscriberCategoryName1._value

    const [listChart, setListChart] = useState(false)
    const [listChartData, setListChartData] = useState(false)

    useEffect(() => {
        getlistChartData();
    }, [])

    useEffect(() => {
        getlistChartData();
    }, [currFilter1, currFilter0])

    useEffect(() => { 
        if(listChartData){
            generateChart3(listChartData);
        }
    }, [listChartData])

    function getlistChartData() {
        var filter1 = false;
        var filter0 = false;
        
        if (currFilter1 === '' || !currFilter1) {
            filter1 = 'Все страны'
        }
        else {
            filter1 = currFilter1
        }
        if (currFilter0 === '' || !currFilter0) {
            filter0 = 'Все категории'
        }
        else {
            filter0 = currFilter0
        }

        getDeliveryFreightData(
        {
            filter: filter1,
            filter0: filter0
        }
        ).then(res => {
            setListChartData(res)
        })
    };

    function generateChart3(data) {
        const data_list =  [ ...new Set(data.customers)]
        const data_total = data.total
        const element = [
            <div class='row h-100'>
                <div class='col col-7 h-100 cobj' >
                    <div class='col obj h-100 container'>
                        {data_list.map(item =>
                            (
                                <DeliveryRow
                                    key={item.categoryName}
                                    name={item.categoryName}
                                    fact={item.factValue}
                                    color={item.color}
                                />
                            )
                        )}
                    </div>
                </div>
                <div class='col col-5 h-100 cobj' >
                    <div class='col obj h-100'>
                        <div className="delivery__circle">
                            <PieCircle data={data_list} renderCustomLegend={() => <CustomLegend total={data_total}/>}/>
                        </div>
                    </div>
                </div>
            </div> 
        ];
        setListChart(element);
    }

    return (
        listChart ? listChart : 'Smth wrong'
    )
}
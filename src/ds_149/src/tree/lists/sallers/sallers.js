import React, { useEffect, useState } from "react";
import { Dropdown } from '../../../../../ds_res/src/Components/Dropdown';
import { StatCard } from "../../../../../%%ds_149/src/components/StatCard";
import { 
    subscriberCategoryName1,
    subscriberCountryName1,
    subscriberEmpName1 
} from '../../../../CrossFilter';
import { Barchart } from "./barchart";

import {
    getCategoryFilterOptions,
    //getEmployeeInfoBars,
    //getEmployeeTableData,
    getEmployeeTopMetricsData
  } from '../../../controllers/DataController';

export const Sallers = (props) => {

    const currCategoryName1 = subscriberCategoryName1._value;

    const [container, setContainer] = useState(false)
    const [selectData, setSelectData] = useState([])
    const [selectedFilter, setSelectedFilter] = useState({name: currCategoryName1})
    const [metrics, setMetrics] = useState([])

    useEffect(() => {
        getCategoryFilterOptions().then(res => {
            setSelectData(res)
        })
        subscriberCategoryName1.subscribe((vl) => {
            if ( vl.length <=0 ) {
                setSelectedFilter({name: 'Все категории'})
            }
        })
    }, [])

    useEffect(() => {
        if (selectedFilter.name != 'Все категории'){
            subscriberCategoryName1.next(selectedFilter.name)
        }
        getEmployeeTopMetricsData({
            filter: selectedFilter.name
        }).then(res => {
            setMetrics(res)
        })
        renderCharts();
    }, [selectedFilter])

    useEffect(() => {
        renderCharts();
    }, [metrics, selectData])

    const onSelectFilter = (option) => {
        setSelectedFilter(option)
    }

    function renderCharts() {
        console.log('data')
        console.log(selectData)
        console.log('selectedFilter')
        console.log(selectedFilter)
        const element = (
            <div className="container-fluid h-100">
                <Dropdown
                    data={selectData}
                    onChange={onSelectFilter}
                    selectedOption={selectedFilter}
                    title='Категория'
                />
                <section className="statsInfo row row-metric">
                    {metrics.map((el) => {
                        return (
                            <StatCard
                                title={el.title}
                                fact={el.fact}
                            />
                        )
                    })}
                </section>
                <div className="row row-metric">
                    <div class='col h-100 cobj' >
                        <div class='col obj h-100'>
                            <Barchart />
                        </div>
                    </div>
                </div>
            </div>  
        )
        setContainer(element)
    }

    return (
        container ? container : 'Smth wrong' 
    )
}
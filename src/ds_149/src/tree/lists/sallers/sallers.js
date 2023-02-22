import React, { useEffect, useState } from "react";
import { Dropdown } from '../../../../../ds_res/src/Components/Dropdown';
import { StatCard } from "../../../../../%%ds_149/src/components/StatCard";
import { subscriberCategoryName1 } from '../../../../CrossFilter';
import { Barchart } from "./barchart";

import {
    getCategoryFilterOptions,
    //getEmployeeInfoBars,
    //getEmployeeTableData,
    getEmployeeTopMetricsData
  } from '../../../controllers/DataController';

export const Sallers = (props) => {

    const [container, setContainer] = useState(false)
    const [selectData, setSelectData] = useState([])
    const [selectedFilter, setSelectedFilter] = useState({})
    const [metrics, setMetrics] = useState([])

    useEffect(() => {
        if (subscriberCategoryName1._value.length <= 0) {
            setSelectedFilter({name: 'Все категории'})
        }
        else {
            setSelectedFilter({name: subscriberCategoryName1._value})
        }
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
    }, [selectData, selectedFilter])

    useEffect(() => {
        renderCharts();
    }, [metrics])

    const onSelectFilter = (option) => {
        setSelectedFilter(option)
    }

    function renderCharts() {
        const element = (
            <div className="container-fluid h-100">
                <Dropdown
                    data={selectData}
                    onChange={onSelectFilter}
                    selectedOption={selectedFilter}
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
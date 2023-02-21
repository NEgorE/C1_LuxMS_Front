import React, { useEffect, useState } from "react";
import { Dropdown } from '../../../../../ds_res/src/Components/Dropdown';
import { subscriberCategoryName1 } from '../../../../CrossFilter';
import {
    getCategoryFilterOptions,
    //getEmployeeInfoBars,
    //getEmployeeTableData,
    //getEmployeeTopMetricsData
  } from '../../../controllers/DataController';

export const Sallers = (props) => {

    const [container, setContainer] = useState(false)
    const [selectData, setSelectData] = useState([])
    const [selectedFilter, setSelectedFilter] = useState({name: 'Все категории'})

    useEffect(() => {
        subscriberCategoryName1.next('')
        getCategoryFilterOptions().then(res => {
            setSelectData(res)
        })
        subscriberCategoryName1.subscribe((vl) => {
            if (vl.length>0) {
                console.log(`lol1`)
            }
            else {
                console.log('lol2')
                setSelectedFilter({name: 'Все категории'})
                getCategoryFilterOptions().then(res => {
                    setSelectData(res)
                })
                renderCharts();
                
            }
        })
    }, [])

    useEffect(() => {
        if (selectedFilter.name != 'Все категории'){
            subscriberCategoryName1.next(selectedFilter.name)
        }
        renderCharts();
    }, [selectData, selectedFilter])

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
            </div>  
        )
        setContainer(element)
    }

    return (
        container ? container : 'Smth wrong' 
    )
}
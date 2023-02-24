import React, { useEffect, useState } from "react";
import { Dropdown } from '../../../../../ds_res/src/Components/Dropdown';
import { ListChart } from "./listchart";
import { 
    subscriberCategoryName1,
    subscriberCountryName1,
    subscriberEmpName1 
} from '../../../../CrossFilter';
import {
    getCountriesFilterOptions
  } from '../../../controllers/DataController';

export const Buyers = (props) => {

    const log_prefix = 'BUYERS: ';

    const currCountryName1 = subscriberCountryName1._value;
    const currCategoryName1 = subscriberCategoryName1._value;

    const [container, setContainer] = useState(false)
    const [dataCountry, setDataCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({name: currCountryName1})
    const [selectedCategory, setSelectedCategory] = useState({name: currCategoryName1})

    useEffect(() => {
        getCountriesFilterOptions().then(res => {
            setDataCountry(res)
        })
        subscriberCountryName1.subscribe((vl) => {
            if ( vl.length <=0 ) {
                setSelectedCountry({name: 'Все страны'})
            }
        })
        subscriberCategoryName1.subscribe((vx) => {
            if ( vx.length <=0 ) {
                setSelectedCategory({name: 'Все категории'})
            }
        })
    }, [])

    useEffect(() => {
        if (selectedCountry.name != 'Все страны'){
            subscriberCountryName1.next(selectedCountry.name)
        }
        if (selectedCategory.name != 'Все категории'){
            subscriberCategoryName1.next(selectedCategory.name)
        }
        renderCharts();
    }, [selectedCountry, dataCountry, selectedCategory])



    const onSelectFilter = (option) => {
        setSelectedCountry(option)
    }

    function renderCharts() {
        const element = (
            <div className="container-fluid buyers_h">
                <Dropdown className="mh-90"
                    data={dataCountry}
                    onChange={onSelectFilter}
                    selectedOption={selectedCountry}
                    title="Страна"
                />
                <div className="row row-metric mh-90">
                    <ListChart />
                </div>
            </div>    
        )
        setContainer(element)
    }

    return (
        container ? container : 'Smth wrong' 
    )
}
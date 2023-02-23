import React, { useEffect, useState } from "react";
import { Dropdown } from '../../../../../ds_res/src/Components/Dropdown';
import { 
    subscriberCategoryName1,
    subscriberCountryName1,
    subscriberEmpName1 
} from '../../../../CrossFilter';
import {
    getCountriesFilterOptions
  } from '../../../controllers/DataController';

export const Buyers = (props) => {

    const currCountryName1 = subscriberCountryName1._value;

    const [container, setContainer] = useState(false)
    const [dataCountry, setDataCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({name: currCountryName1})

    useEffect(() => {
        getCountriesFilterOptions().then(res => {
            setDataCountry(res)
        })
        subscriberCountryName1.subscribe((vl) => {
            if ( vl.length <=0 ) {
                setSelectedCountry({name: 'Все страны'})
            }
        })
    }, [])

    useEffect(() => {
        if (selectedCountry.name != 'Все страны'){
            subscriberCountryName1.next(selectedCountry.name)
        }
        renderCharts();
    }, [selectedCountry])

    const onSelectFilter = (option) => {
        setSelectedCountry(option)
    }

    function renderCharts() {
        console.log('data')
        console.log(dataCountry)
        console.log('selectedFilter')
        console.log(selectedCountry)
        const element = (
            <div className="container-fluid h-100">
                <Dropdown
                    data={dataCountry}
                    onChange={onSelectFilter}
                    selectedOption={selectedCountry}
                    title="Страна"
                />
                <div>
                    lol
                </div> 
            </div>    
        )
        setContainer(element)
    }

    return (
        container ? container : 'Smth wrong' 
    )
}
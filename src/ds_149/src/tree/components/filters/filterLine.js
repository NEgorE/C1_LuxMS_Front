import React, {useEffect, useState} from "react";
import { subscriberCategoryName1 } from '../../../../CrossFilter';

import "bootstrap/dist/css/bootstrap.min.css";
import "./filterLine.css";


export const FilterLine = () => {

    const log_prefix = 'FILTER_LINE: ';

    const [currCategoryName, setCurrCategoryName] = useState([])

    const [buttonClear, setButtonClear] = useState(0)
    const [buttonFilter1, setButtonFilter1] = useState(false)

    useEffect(() => {
        subscriberCategoryName1.subscribe((vl) => {
            console.log(subscriberCategoryName1)
            const newFilterCount = subscriberCategoryName1._value.length; 
            setCurrCategoryName(vl)
            renderCrear(newFilterCount);
        })
    }, [])

    useEffect(() => {
        renderButtonFilter1(currCategoryName);
    }, [currCategoryName])

    function renderButtonFilter1(data) {
        const currFilterCount = data;
        if ( currFilterCount ) {
            setButtonFilter1(
                <li className="nav-item nav-item-filter">
                    <button className="nav-link nav-link-filter" onClick={clearFilter1} >Filter1: {currFilterCount} </button >
                    
                </li>
            )
        }
        else {
            setButtonFilter1(false)
        }
    }

    function clearFilter1() {
        subscriberCategoryName1.next('')
    }

    function renderCrear(isClearNumber) {
        if (isClearNumber != 0){
            setButtonClear(
                <li className="nav-item nav-item-filter">
                    <button className="nav-link nav-link-filter" onClick={clearFilter1} >Clear</button >
                </li>
            )
        }
        else {
            setButtonClear(
                <li className="nav-item nav-item-filter">
                    <div className="nav-link nav-link-no-filters"> No one filter selected </div >
                </li>
            )
        }
    }

    return (
        <ul className="nav nav-filters">
            {buttonClear ? buttonClear : false}
            {buttonFilter1 ? buttonFilter1 : false}
        </ul>
    )
}
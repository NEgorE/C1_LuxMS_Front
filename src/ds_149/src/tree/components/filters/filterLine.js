import React, {useEffect, useState} from "react";
import { subscriberCategoryName1, subscriberCountryName1 } from '../../../../CrossFilter';

import "bootstrap/dist/css/bootstrap.min.css";
import "./filterLine.css";


export const FilterLine = () => {

    const log_prefix = 'FILTER_LINE: ';

    const [currCategoryName, setCurrCategoryName] = useState('')
    const [currCountryName, setCurrCountryName] = useState('')

    const [buttonClear, setButtonClear] = useState(0)
    const [buttonFilter1, setButtonFilter1] = useState(false)
    const [buttonFilter2, setButtonFilter2] = useState(false)

    useEffect(() => {
        subscriberCategoryName1.subscribe((vl) => {
            console.log(`${log_prefix} chandeg category to: ${vl}`)
            setCurrCategoryName(vl)
        })
        subscriberCountryName1.subscribe((xl) => {
            console.log(`${log_prefix} country category to: ${xl}`)
            setCurrCountryName(xl)
        })
    }, [])

    useEffect(() => {
        renderCrear();
        renderButtonFilter1(currCategoryName);
        renderButtonFilter2(currCountryName);
    }, [currCategoryName, currCountryName])

    function renderButtonFilter1(data) {
        const currFilterCount = data;
        console.log(`FILTERLINE ${currFilterCount}`)
        if ( currFilterCount.length>0 ) {
            setButtonFilter1(
                <li className="nav-item nav-item-filter">
                    <button className="nav-link nav-link-filter" onClick={clearFilter1} >Category: {currFilterCount} </button >
                    
                </li>
            )
        }
        else {
            setButtonFilter1(false)
        }
    }

    function renderButtonFilter2(data) {
        const currFilterCount = data;
        console.log(`FILTERLINE ${currFilterCount}`)
        if ( currFilterCount.length>0 ) {
            setButtonFilter2(
                <li className="nav-item nav-item-filter">
                    <button className="nav-link nav-link-filter" onClick={clearFilter2} >Country: {currFilterCount} </button >
                    
                </li>
            )
        }
        else {
            setButtonFilter2(false)
        }
    }

    function clearFilter1() {
        subscriberCategoryName1.next('')
    }
    function clearFilter2() {
        subscriberCountryName1.next('')
    }

    function renderCrear() {
        console.log(`${log_prefix} currCategoryName: ${currCategoryName}`)
        console.log(`${log_prefix} ccurrCountryName: ${currCountryName}`)
        const isClearNumber = currCategoryName.length + currCountryName.length;
        console.log(`${log_prefix} cisClearNumber: ${isClearNumber}`)
        if (isClearNumber != 0 || isClearNumber){
            setButtonClear(
                <li className="nav-item nav-item-filter">
                    <button className="nav-link nav-link-filter" onClick={() => {clearFilter1(); clearFilter2();}} >Clear</button >
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
            {buttonFilter2 ? buttonFilter2 : false}
        </ul>
    )
}
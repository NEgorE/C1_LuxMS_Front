import React, {useEffect, useState} from "react"
import rison from "rison"
import {urlState} from "bi-internal/core"

import {Dropdown} from "../Dropdown"
import {getAllDates} from "../../../../ds_122/src/controllers/DataController"
import {CustomUrlDataType} from "../../../../ds_122/src/types/GeneralInfoTypes";

export const TrueCalendar = () => {
  const [dates, setDates] = useState([])
  const [selectedDate, setSelectedDate] = useState({name: '2007-07-30'})

  useEffect(() => {
    getAllDates().then(res => {
      setDates(res)
    })
  }, [])

  const onSelectDate = (option) => {
    setSelectedDate(option)

    const tmpCustomUrlData: CustomUrlDataType = {
      employee: option.name
    }
    // ;(window as any).parent.__urlState.updateModel({customUrlData: rison.encode(tmpCustomUrlData)})
    urlState.updateModel({customUrlData: rison.encode(tmpCustomUrlData)})
  }


  return <div className="trueCalendar">
    <Dropdown
      data={dates}
      selectedOption={selectedDate}
      onChange={onSelectDate}
      title={'Дата'}
    />
  </div>
}

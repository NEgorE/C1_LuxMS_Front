import React, {useEffect, useState} from "react"
import './DetailInfo.scss'

import {Dropdown} from "../ds_res/src/Components/Dropdown"
import {PreparedClothCategoryType, PreparedDetailTableType} from "./src/types/DetailInfoTypes"
import {DeliveryOrderFreight} from "./src/components/DeliveryOrderFreight"
import {DetailTable} from "./src/components/DetailTable/DetailTable"
import {GoButton} from "../ds_res/src/Components/GoButton/GoButton"
import {
  getClothCategory,
  getDetailInfoTableData,
  getEmployeesFilterOptions
} from "./src/controllers/DetailsDataController"

const DetailInfo = () => {
  const [selectData, setSelectData] = useState([])
  const [selectedFilter, setSelectedFilter] = useState({name: 'Коллинс'})

  const [clothData, setClothData] = useState<PreparedClothCategoryType>({
    categories: [],
    total: 0
  })
  const [tableData, setTableData] = useState<PreparedDetailTableType[]>([])

  const onSelectFilter = (option) => {
    setSelectedFilter(option)
  }

  useEffect(() => {
    getEmployeesFilterOptions().then(res => {
      setSelectData(res)
    })
  }, [])

  useEffect(() => {
    getClothCategory({filter: selectedFilter.name}).then(res => {
      setClothData(res)
    })
  }, [selectedFilter])

  useEffect(() => {
    getDetailInfoTableData({filter: selectedFilter.name}).then(res => {
      setTableData(res)
    })
  }, [selectedFilter])

  return <div className="DetailInfo">
    <h1>Детализация продаж по продавцам</h1>

    <Dropdown
      data={selectData}
      selectedOption={selectedFilter}
      onChange={onSelectFilter}
      title="Фамилия сотрудника"
    />

    <DeliveryOrderFreight categories={clothData.categories} total={clothData.total}/>

    <div className="DetailInfo__table">
      <h2>Детализация</h2>
      <DetailTable data={tableData}/>
    </div>

    <div className="DetailInfo__btn">
      <GoButton onClick={() => {
      }}/>
    </div>

  </div>
}
export default DetailInfo

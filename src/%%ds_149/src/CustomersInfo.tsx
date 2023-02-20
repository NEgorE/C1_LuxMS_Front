import React, {useEffect, useState} from "react"
import './styles/Delivery.scss'

import {PreparedDeliveryFreightType} from "./types/DeliveryInfoTypes"
import {DeliveryCards} from "./components/DeliveryCards"
import {DeliveryOrderFreight} from "./components/DeliveryOrderFreight"
import {Dropdown} from "../../ds_res/src/Components/Dropdown"

export const CustomersInfo = () => {
  const [selectData, setSelectData] = useState([])
  const [selectedFilter, setSelectedFilter] = useState({name: 'Италия'})

  const [freightData, setFreightData] = useState<PreparedDeliveryFreightType>({
    categories: [],
    total: 0
  })
  const [cardsData, setCardsData] = useState([])

  const onSelectFilter = (option) => {
    // Логика для выбора фильтра (setSelectedFilter)
  }

  useEffect(() => {
    // Получаем фильтры и сетаем их в setSelectData
  }, [])

  useEffect(() => {
   // Получаем данные для категорий и бублика и сетаем их в setFreightData
  }, [])

  useEffect(() => {
    // Получаем Перечень товаров и сетаем их в setCardsData
  }, [])

  return <>
    <h1>HELLO WORLD</h1>

    {/*<Dropdown*/}
    {/*  data={[]}*/}
    {/*  selectedOption={selectedFilter}*/}
    {/*  onChange={onSelectFilter}*/}
    {/*  title="Страна"*/}
    {/*/>*/}

    {/*<DeliveryOrderFreight categories={[]} total={0}/>*/}

    {/*<DeliveryCards data={[]}/>*/}
  </>
}

import React from 'react'
import './DeliveryOrderFreight.scss'

import {DeliveryRow} from "../DeliveryRow"
import {PieCircle} from "../../../../ds_res/src/Components/PieChart"
import {CustomLegend} from "../../../../ds_res/src/Components/CustomLegend/CustomLegend";

type PropsType = {
  categories: Array<{
    categoryName: string
    factValue: number
    color: string
  }>
  total: number
}

export const DeliveryOrderFreight = ({categories, total}: PropsType) => {
  return <section className='delivery__general'>
    <div className='delivery__rows'>
      {categories.map(c => {
        return <DeliveryRow
          key={c.categoryName}
          name={c.categoryName}
          fact={c.factValue}
          color={c.color}
        />
      })}
    </div>

    <div className="delivery__circle">
      <PieCircle data={categories} renderCustomLegend={() => <CustomLegend total={total}/>}/>
    </div>

  </section>
}

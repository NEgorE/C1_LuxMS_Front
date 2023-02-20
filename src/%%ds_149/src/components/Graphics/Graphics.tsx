import React from 'react'
import './Graphics.scss'

import {PreparedBarType} from "../../types/GeneralInfoTypes"
import {findLargestInteger} from "../../../../ds_res/src/utils/common"
import {Bar} from "../Bar"

interface IProps {
  data: PreparedBarType[]
  onClick: (option: string) => void
}

export const Graphics = ({data, onClick}: IProps) => {
  const maxValue = findLargestInteger(data.map(el => el.vol))

  return (
    <section className='graphics'>
      <div className='graphics__title'>
        <h5>рейтинг продавцов</h5>
      </div>
      <div className='graphics__wrapper scroller'>
        <div className='graphics__inner'>
          {data.map(({empId, vol, empName, isDeclined}) => {
            const size = (vol / maxValue) * 100
            return <Bar
              key={empId}
              name={empName}
              factValue={vol}
              size={size}
              isDeclined={isDeclined}
              onClick={() => onClick(empName)}
            />
          })}
        </div>
      </div>
    </section>
  )
}

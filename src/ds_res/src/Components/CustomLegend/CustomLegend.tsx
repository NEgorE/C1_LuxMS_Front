import React from "react"
import './CustomLegend.scss'

export const CustomLegend = ({total}) => {
  return (
    <div className="CustomLegend__info">
      <h6 className="CustomLegend__title">Всего:</h6>
      <div className="CustomLegend__quantity">
        {total}
      </div>
    </div>
  )
}

import React from "react"
import './CustomLegend.scss'

export const CustomLegend = ({total}) => {
  return (
    <div className="CustomLegend__info">
      <h6 className="CustomLegend__title">Всего:</h6>
      <div className="CustomLegend__quantity">
        {String(total.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '))}
      </div>
    </div>
  )
}

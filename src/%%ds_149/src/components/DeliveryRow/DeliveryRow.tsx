import React, {FC} from 'react'

import './DeliveryRow.scss'

interface IProps {
  name: string
  fact: number
  color: string
}

export const DeliveryRow: FC<IProps> = (
  {
    name,
    fact,
    color,
  }
) => {
  return (
    <div className="DeliveryRow">
      <div className="DeliveryRow__coloredLine" style={{backgroundColor: color}}/>
      <div className="DeliveryRow__name">{name}</div>
      <div className="DeliveryRow__info">
        <div className="DeliveryRow__quantity">{String(fact.toFixed(0)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}</div>
        <div className="DeliveryRow__changes"></div>
      </div>
    </div>
  )
}

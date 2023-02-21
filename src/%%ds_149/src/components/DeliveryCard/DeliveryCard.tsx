import React, {FC} from 'react'

import './DeliveryCard.scss'

interface IProps {
  name: string
  fact: number
}

export const DeliveryCard: FC<IProps> = (
  {
    name,
    fact,
  }
) => {
  return (
    <div className="ProfCard">
      <p className="ProfCard__name">{name}</p>
      <div className="ProfCard__info">
        <div className="ProfCard__quantity"> {fact} </div>
        {/*<div className="ProfCard__changes"></div>*/}
      </div>
    </div>
  )
}

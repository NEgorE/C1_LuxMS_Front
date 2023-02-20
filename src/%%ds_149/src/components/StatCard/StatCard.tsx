import React, {FC} from 'react'
import './StatCard.scss'

interface IProps {
  title: string
  fact: number
}

export const StatCard: FC<IProps> = ({title, fact}) => {
  return (
    <div className="StatCard">
      <p className="StatCard__title">{title}</p>
      <div className="StatCard__quantity">{fact}</div>
    </div>
  )
}

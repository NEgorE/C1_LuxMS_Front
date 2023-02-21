import React, {FC} from 'react'
import './StatCard.scss'

interface IProps {
  title: string
  fact: number
}

export const StatCard: FC<IProps> = ({title, fact}) => {
  return (
    <div className="StatCard col-6 cobj">
      <div className='obj'>
        <p className="StatCard__title">{title}</p>
        <div className="StatCard__quantity">{String(fact).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}</div>
      </div>
    </div>
  )
}

import React from 'react'
import './Bar.scss'

type PropsType = {
  name: string
  size: number
  factValue: number
  isDeclined: boolean
  onClick: () => void
}

export const Bar = ({name, size, factValue, isDeclined, onClick}: PropsType) => {
  return (
    <div className="bar">
      <div
        className="bar__block"
        style={{backgroundColor: isDeclined ? '#EF6B6B' : '#7CB1FF', height: size || '1px'}}
        onClick={onClick}
      />
      <div className="bar__fact">{factValue || '-'}</div>
      <div className="bar__location">{name}</div>
    </div>
  )
}

import React from "react"
import './GoButton.scss'

export const GoButton = ({onClick, title = 'Вернуться назад'}) => {
  return <button className="GoButton" onClick={onClick}>
    {title}
  </button>
}

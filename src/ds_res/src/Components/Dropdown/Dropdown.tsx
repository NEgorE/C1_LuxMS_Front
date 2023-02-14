import React, {FC, useRef, useState} from 'react'
import classnames from 'classnames'
import './Dropdown.scss'

import {useOnClickOutside} from '../../hooks/useOnClickOutside'
import {SelectArrow} from "../../assets/icons"


interface IOption {
  name: string
}

interface IProps {
  data: IOption[]
  title?: string
  additionalClass?: string
  onChange: (option: IOption) => void
  selectedOption: { name: string }
}

export const Dropdown: FC<IProps> = (
  {
    data = [],
    title = 'Категории',
    additionalClass = '',
    onChange,
    selectedOption = data[0]
  }
) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsOptionsOpen(false))

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  const onSelectOption = (selectedObj: any) => {
    onChange(selectedObj)
    setIsOptionsOpen(false)
  }

  return (
    <div className={`customSelect ${additionalClass}`} ref={ref}>
      <div className="customSelect__wrapper">
        <button className="customSelect__btn" type="button" onClick={toggleOptions}>
          <span className="customSelect__btn-title">{title}:</span>
          <span className={'customSelect__btn-category'}>{selectedOption.name}</span>
          <SelectArrow styles={{marginLeft: '1rem'}}/>
        </button>
        <ul className={classnames('customSelect__options scroller', {show: isOptionsOpen})}>
          {data.map((option) => (
            <li key={option.name}
                onClick={() => onSelectOption(option)}
                className="customSelect__options-item"
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

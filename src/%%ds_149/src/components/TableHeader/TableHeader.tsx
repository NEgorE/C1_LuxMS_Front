import React, {useState} from 'react'
import './TableHeader.scss'
import classNames from 'classnames'

import {DownArrow, SortArrow, UpArrow} from "../../../../ds_res/src/assets/icons"

interface IProps {
  columns: Array<{ label: string; accessor: string; className?: string }>
  handleSorting: (sortField: string, sortOrder: string) => void
}

export const TableHeader = ({columns, handleSorting}: IProps) => {
  const [sortField, setSortField] = useState('')
  const [order, setOrder] = useState('asc')

  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
  }

  const getSortingArrow = (accessor) => {
    return sortField === accessor && order === 'asc' ? (
      <UpArrow/>
    ) : sortField === accessor && order === 'desc' ? (
      <DownArrow/>
    ) : (
      <SortArrow/>
    )
  }

  return (
    <thead>
    <tr>
      {columns.map(({label, accessor, className}) => {
        const arrow = getSortingArrow(accessor)
        return (
          <th
            className={classNames(`TableHeader ${className}`)}
            onClick={() => handleSortingChange(accessor)}>
            <span> {label} {arrow} </span>
          </th>
        )
      })}
    </tr>
    </thead>
  )
}

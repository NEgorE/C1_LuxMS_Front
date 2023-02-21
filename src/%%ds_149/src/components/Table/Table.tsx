import React, {useEffect, useState} from 'react'
import './Table.scss'

import {PreparedTableType} from "../../types/GeneralInfoTypes"
import {TableRow} from './TableRow'
import {TableHeader} from '../TableHeader/TableHeader'

interface PropsType {
  data: PreparedTableType[]
}

export const Table = ({data}: PropsType) => {
  const [tableData, setTableData] = useState<PreparedTableType[]>([])

  const handleSorting = (sortField, sortOrder) => {
    if (!sortField) return null

    const sorted = [...tableData].sort((a, b) => {
      return a[sortField].toString().localeCompare(b[sortField].toString()) * (sortOrder === 'asc' ? 1 : -1)
    })

    setTableData(sorted)
  }

  const headerColumns = [
    {label: 'Имя', accessor: 'empName'},
    {label: 'Объем продаж, руб', accessor: 'vol', className: 'quantity'},
    {label: 'Объем продаж, шт', accessor: 'orderQuantity', className: 'quantity'},
    {label: 'Годовая зарплата', accessor: 'empSalary', className: 'percentage'}
  ]

  useEffect(() => {
    setTableData(data)
  }, [data])

  return (
    <section className="table">
      <table>
        <TableHeader columns={headerColumns} handleSorting={handleSorting}/>

        {tableData.map(({vol, empName, empId, empSalary, orderQuantity}) => (
          <TableRow
            key={empId}
            name={empName}
            salary={empSalary}
            vol={vol}
            quantity={orderQuantity}
          />
        ))}

      </table>
    </section>
  )
}

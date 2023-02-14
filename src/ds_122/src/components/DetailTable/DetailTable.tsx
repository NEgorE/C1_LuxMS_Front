import React, {useEffect, useState} from 'react'
import './DetailTable.scss'

import {TableHeader} from "../TableHeader/TableHeader"
import {DetailTableRow} from "./DetailTableRow"
import {PreparedDetailTableType} from "../../types/DetailInfoTypes";

interface PropsType {
  data: PreparedDetailTableType[]
}

export const DetailTable = ({data}: PropsType) => {
  const [tableData, setTableData] = useState<PreparedDetailTableType[]>([])

  const handleSorting = (sortField, sortOrder) => {
    if (!sortField) return null

    const sorted = [...tableData].sort((a, b) => {
      return a[sortField].toString().localeCompare(b[sortField].toString()) * (sortOrder === 'asc' ? 1 : -1)
    })

    setTableData(sorted)
  }

  const headerColumns = [
    {label: 'Категория одежды', accessor: 'categoryName'},
    {label: 'Объем продаж, руб', accessor: 'vol', className: 'quantity'},
    {label: 'Объем продаж, шт', accessor: 'orderQuantity', className: 'quantity'}
  ]

  useEffect(() => {
    setTableData(data)
  }, [data])

  return (
    <section className="table">
      <table>
        <TableHeader columns={headerColumns} handleSorting={handleSorting}/>

        {tableData.map(({vol, orderQuantity, categoryName}) => (
          <DetailTableRow
            key={categoryName}
            name={categoryName}
            vol={vol}
            quantity={orderQuantity}
          />
        ))}

      </table>
    </section>
  )
}

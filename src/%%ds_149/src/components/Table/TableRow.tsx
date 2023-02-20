import React from 'react'
import './TableRow.scss'

type TableRowType = {
  name: string
  vol: number
  quantity: number
  salary: number
}

export const TableRow = ({name, vol, salary, quantity}: TableRowType) => {
  return (
    <tr className="TableRow">
      <td className="TableRow__name">{name}</td>
      <td className="TableRow__vol">{vol}</td>
      <td className="TableRow__vol">{quantity}</td>
      <td className="TableRow__salary">{salary}</td>
    </tr>
  )
}

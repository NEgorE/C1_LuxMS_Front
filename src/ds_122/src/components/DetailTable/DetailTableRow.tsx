import React from 'react'
import './DetailTableRow.scss'

type TableRowType = {
  name: string
  vol: number
  quantity: number
}

export const DetailTableRow = ({name, vol, quantity}: TableRowType) => {
  return (
    <tr className="TableRow">
      <td className="TableRow__name">{name}</td>
      <td className="TableRow__vol">{vol}</td>
      <td className="TableRow__vol">{quantity}</td>
    </tr>
  )
}

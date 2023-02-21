import React from 'react'
import './PieChart.scss'

import {Cell, Pie, ResponsiveContainer, Legend, PieChart} from 'recharts'


export const PieCircle = (
  {
    data,
    dataKey = 'factValue',
    innerRadius = '70%',
    outerRadius = '100%',
    renderCustomLegend
  }
) => {
  return (
    <div className='PieChart'>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey={dataKey} innerRadius={innerRadius} outerRadius={outerRadius}>
            {data.map((cell, index) => (
              <Cell stroke='transparent' key={`cell-${index}`} fill={cell.color}/>
            ))}
          </Pie>
          {renderCustomLegend && <Legend align="center" verticalAlign="middle" content={renderCustomLegend}/>}
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

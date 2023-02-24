import React from 'react'

import {Cell, Pie, ResponsiveContainer, Legend, PieChart, Tooltip} from 'recharts'


export const PieCircle = (
  {
    data,
    dataKey = 'factValue',
    innerRadius = '70%',
    outerRadius = '100%',
    renderCustomLegend
  }
) => {



  console.log('Pie data')
  console.log(data)
  return [
    <div className='PieChart'>
      <ResponsiveContainer width={515} height={485}>
        <PieChart>
          <Pie data={data} dataKey={dataKey} innerRadius={innerRadius} outerRadius={outerRadius} isAnimationActive={false} nameKey="categoryName">
            {data.map((cell, index) => (
                <Cell stroke='transparent' key={`cell-${index}`} fill={cell.color}/>
            ))}
          </Pie>
          <Tooltip />
          {renderCustomLegend && <Legend align="center" verticalAlign="middle" content={renderCustomLegend}/>}
        </PieChart>
      </ResponsiveContainer>
    </div>
  ]
}

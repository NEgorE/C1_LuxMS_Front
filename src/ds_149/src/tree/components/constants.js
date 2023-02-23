import { Buyers } from '../lists/buyers/buyers.js';
import { Sallers } from '../lists/sallers/sallers.js';
import React from 'react';

export const TABS = [
  {title: 'SELLers', type: 1, obj: <Sallers />},
  {title: 'BUYers', type: 2, obj: <Buyers />},
  ]

export const METRICS = [
  {title: 'Объем продаж, руб', fact: 0, keyName: 'vol'},
  {title: 'Объем продаж, кол-во', fact: 0, keyName: 'order_quantity'},
]

export const COLORS = [
  '#3EDDD3',
  '#A4F3EA',
  '#BB6BD9',
  '#E6ACFA',
  '#F19A43',
  '#FFC67C',
  '#53D051',
  '#A0F19F',
  '#2F80ED',
  '#7CB1FF',
  '#DD3E8A',
  '#FB99C2'
]
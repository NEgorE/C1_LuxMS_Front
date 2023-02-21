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
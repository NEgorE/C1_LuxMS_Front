import { Buyers } from '../lists/buyers/buyers.js';
import { Sallers } from '../lists/sallers/sallers.js';
import React from 'react';

export const TABS = [
  {title: 'SELLers', type: 1, obj: <Sallers />},
  {title: 'BUYers', type: 2, obj: <Buyers />},
  ]

export const METRICS = [
    { npp: 'metric1', title: 'MAU', value: 'mau'},
    { npp: 'metric2', title: 'DAU', value: 'dau'},
]

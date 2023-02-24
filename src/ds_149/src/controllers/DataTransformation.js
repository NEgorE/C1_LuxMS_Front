import {METRICS, COLORS} from "../tree/components/constants";

import { schemeAccent } from 'd3-scale-chromatic';

export const prepareDataForDropdown = (arr) => {
  if (!Array.isArray(arr) || !arr) return []

  //const data3 = [{name: 'Все категории'}];
  const data3 = [];
  arr.map((obj) => {
    const keys = Object.keys(obj)
    const nameKey = keys[0]
    data3.push({name: obj[nameKey]})
  })
  return data3
}


export const prepareTopMetricsData = (data) => {
  return METRICS.map((el) => {
    return {
      ...el,
      fact: data[el.keyName].toFixed(0)
    }
  })
}


export const prepareEmployeeBarsData = (data) => {
    return data.map(el => {
        const {empid, vol, emp_last_name} = el
        return {
            empId: empid,
            empName: emp_last_name,
            vol: +vol.toFixed(1),
            voltitle: String(+vol.toFixed(0)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
            isDeclined: vol < 5000 ? '#EF6B6B' : '#7CB1FF'
        }
    })
}

export const prepareEmployeeInfoTableData = (data) => {
  return data.map(row => {
    const {empid, vol, emp_last_name, emp_year_salary, order_quantity} = row

    return {
      empId: empid,
      empName: emp_last_name,
      vol: +vol.toFixed(1),
      isDeclined: (vol - emp_year_salary) < 0,
      orderQuantity: order_quantity,
      empSalary: emp_year_salary
    }
  })
}

export const prepareDeliveryCardsData = (data) => {
  return data.map(({order_unitprice, productname}) => {
    return {
      productsInStock: +order_unitprice.toFixed(1),
      supplierCompanyName: productname
    }
  })
}

export const prepareDeliveryFreightData = (data) => {
  let total = 0
  const customers = data.map(({customer_companyname, order_unitprice}, index) => {
    total += order_unitprice
    return {
      factValue: +order_unitprice.toFixed(1),
      categoryName: customer_companyname,
      color: schemeAccent[index % 8]
    }
  })

  return {
    total: +total.toFixed(1),
    customers,
  }
}

  
import {METRICS} from "../tree/components/constants";

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
  
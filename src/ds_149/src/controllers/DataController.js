// @ts-ignore
import {KoobDataService} from 'bi-internal/services'
import {
  prepareDataForDropdown,
  prepareEmployeeBarsData,
  prepareEmployeeInfoTableData,
  prepareTopMetricsData
} from "./DataTransformation";

const {koobDataRequest3} = KoobDataService;

const KOOB_ID = 'luxmsbi.Sales_Demo'

export const getCategoryFilterOptions = async () => {
  const data = await koobDataRequest3(
    KOOB_ID,
    ['categoryname'],
    [],
    {},
    {},
    'getCategoryFilterOptions')
  const data2 = prepareDataForDropdown(data)
  return data2
}

export const getEmployeeTopMetricsData = async (
    {
        filter
    }
    ) => {
    if (filter != 'Все категории') {
        var dims = ['categoryname'];
        var categoryFilter = { categoryname: ['=', filter] }
    }
    else {
        var dims = [];
        var categoryFilter = {};
    }
    console.log(`filter is ${categoryFilter}`)
    console.log(categoryFilter)
    const data = await koobDataRequest3(
        KOOB_ID,
        dims,
        ['sum(vol)', 'sum(order_quantity)'],
        categoryFilter,
        {},
        'getEmployeeTopMetricsData'
    )

    return prepareTopMetricsData(data[0])
}


export const getEmployeeInfoBars = async (
  {
    filter
  }
) => {
  const data = await koobDataRequest3(
    KOOB_ID,
    ['emp_last_name', 'empid'],
    ['sum(vol)'],
    {
      categoryname: ['=', filter]
    },
    {
      sort: ['-vol']
    },
    'getEmployeeInfoBars'
  )

  return prepareEmployeeBarsData(data)
}



export const getEmployeeTableData = async () => {
  const data = await koobDataRequest3(
    KOOB_ID,
    ['emp_last_name', 'empid'],
    ['sum(vol)', 'sum(order_quantity)', 'sum(emp_year_salary)'],
    {},
    {},
    'getEmployeeTableData'
  )

  return prepareEmployeeInfoTableData(data)
}

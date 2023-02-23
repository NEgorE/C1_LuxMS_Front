// @ts-ignore
import {KoobDataService} from 'bi-internal/services'
import {
  prepareDataForDropdown,
  prepareEmployeeBarsData,
  prepareEmployeeInfoTableData,
  prepareTopMetricsData,
  prepareDeliveryCardsData, 
  prepareDeliveryFreightData
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
    if (filter != 'Все категории') {
        var categoryFilter = { categoryname: ['=', filter] }
    }
    else {
        var categoryFilter = {};
    }
    const data = await koobDataRequest3(
        KOOB_ID,
        ['emp_last_name', 'empid'],
        ['sum(vol)'],
        categoryFilter,
        {
          sort: ['-vol']
        },
        'getEmployeeInfoBars'
    )
    const returndata = prepareEmployeeBarsData(data)
    return returndata
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
//CUSTOMERS INFO

// Получение фильтра
export const getCountriesFilterOptions = async () => {
  const data = await koobDataRequest3(
    KOOB_ID,
    ['customer_country'],
    [],
    {},
    {},
    'getCountriesFilterOptions')
  const data2 = prepareDataForDropdown(data)
  return data2
}

// Получение данных для категорий и бублика
export const getDeliveryFreightData = async (
  {
    filter
  }
  ) => {
    const data= await koobDataRequest3(
    KOOB_ID,
    ['customer_companyname'],
    ['sum(order_unitprice)'],
    {customer_country: ['=', filter]},
    {},
    'getDeliveryFreightData')
  return prepareDeliveryFreightData(data)
}

export const getDeliveryCardsData = async (
  {
    filter
  }
) => {
  const data = await koobDataRequest3(
    KOOB_ID,
    ['productname'],
    ['sum(order_unitprice)'],
    {customer_country: ['=', filter]},
    {},
    'getDeliveryCardsData'
  )
  return prepareDeliveryCardsData(data)
}

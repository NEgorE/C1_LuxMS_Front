// @ts-ignore
import {KoobDataService} from 'bi-internal/services'

import {prepareDataForDropdown} from "./DataTransformation"
import {
  PreparedClothCategoryType,
  PreparedDetailTableType,
  ServerClothCategoryType,
  ServerDetailTableType
} from "../types/DetailInfoTypes";
import {prepareClothCategoriesData, prepareDetailInfoTableData} from "./DetailsDataTransformation"

const {koobDataRequest3} = KoobDataService

const KOOB_ID = 'luxmsbi.Sales_Demo'

// DetailInfo

export const getEmployeesFilterOptions = async () => {
  const data = await koobDataRequest3(KOOB_ID, ['emp_last_name'], [], {})
  return prepareDataForDropdown(data)
}

export const getClothCategory = async (
  {
    filter
  }
): Promise<PreparedClothCategoryType> => {
  const data: ServerClothCategoryType[] = await koobDataRequest3(
    KOOB_ID,
    ['categoryname'],
    ['sum(vol)'],
    {emp_last_name: ['=', filter]},
    {
      sort: ['-vol']
    },
    'getClothCategory'
  )
  return prepareClothCategoriesData(data)
}

export const getDetailInfoTableData = async (
  {
    filter
  }
): Promise<PreparedDetailTableType[]> => {
  const data: ServerDetailTableType[] = await koobDataRequest3(
    KOOB_ID,
    ['categoryname'],
    ['sum(vol)', 'sum(order_quantity)'],
    {emp_last_name: ['=', filter]},
    {},
    'getDetailInfoTableData'
  )
  return prepareDetailInfoTableData(data)
}

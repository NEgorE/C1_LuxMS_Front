import {
  PreparedClothCategoryType,
  PreparedDetailTableType,
  ServerClothCategoryType,
  ServerDetailTableType
} from "../types/DetailInfoTypes";
import {COLORS} from "../Constants/CONSTANTS"

//DETAILS INFO

export const prepareClothCategoriesData = (data: ServerClothCategoryType[]): PreparedClothCategoryType => {
  let total = 0
  const categories = data.map(({vol, categoryname}, index) => {
    total += vol
    return {
      factValue: +vol.toFixed(1),
      categoryName: categoryname,
      color: COLORS[index]
    }
  })

  return {
    total: +total.toFixed(1),
    categories,
  }
}

export const prepareDetailInfoTableData = (data: ServerDetailTableType[]): PreparedDetailTableType[] => {
  return data.map((row) => {
    const {vol, order_quantity, categoryname} = row

    return {
      vol: +vol.toFixed(1),
      orderQuantity: order_quantity,
      categoryName: categoryname
    }
  })
}

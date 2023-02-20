export type ServerClothCategoryType = {
  categoryname: string
  vol: number
}

export type PreparedClothCategoryType = {
  total: number
  categories: Array<{
    categoryName: string
    factValue: number
    color: string
  }>
}

export type ServerDetailTableType = {
  categoryname: string
  vol: number
  order_quantity: number
}

export type PreparedDetailTableType = {
  categoryName: string
  vol: number
  orderQuantity: number
}

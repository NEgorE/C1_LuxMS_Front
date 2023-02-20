export type ServerDeliveryCardType = {
  productname: string
  order_unitprice: number
}

export type PreparedDeliveryCardType = {
  supplierCompanyName: string
  productsInStock: number
}

export type ServerDeliveryFreightType = {
  customer_companyname: string
  order_unitprice: number
}

export type PreparedDeliveryFreightType = {
  total: number
  categories: Array<{
    categoryName: string
    factValue: number
    color: string
  }>
}

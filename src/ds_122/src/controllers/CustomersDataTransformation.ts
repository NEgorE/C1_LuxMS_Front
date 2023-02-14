import {
  PreparedDeliveryCardType,
  PreparedDeliveryFreightType,
  ServerDeliveryCardType,
  ServerDeliveryFreightType
} from "../types/DeliveryInfoTypes";
import {COLORS} from "../Constants/CONSTANTS";

//CUSTOMERS INFO

export const prepareDeliveryCardsData = (data: ServerDeliveryCardType[]): PreparedDeliveryCardType[] => {
  // return data.map(({order_unitprice, productname}) => {
  //   return {
  //     productsInStock: +order_unitprice.toFixed(1),
  //     supplierCompanyName: productname
  //   }
  // })
}

export const prepareDeliveryFreightData = (data: ServerDeliveryFreightType[]): PreparedDeliveryFreightType => {
  // let total = 0
  // const categories = data.map(({customer_companyname, order_unitprice}, index) => {
  //   total += order_unitprice
  //   return {
  //     factValue: +order_unitprice.toFixed(1),
  //     categoryName: customer_companyname,
  //     color: COLORS[index]
  //   }
  // })
  //
  // return {
  //   total: +total.toFixed(1),
  //   categories,
  // }
}

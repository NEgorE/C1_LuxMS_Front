import {
  PreparedDeliveryCardType,
  PreparedDeliveryFreightType, ServerDeliveryCardType,
  ServerDeliveryFreightType
} from "../types/DeliveryInfoTypes";
import {prepareDeliveryCardsData, prepareDeliveryFreightData} from "./CustomersDataTransformation"

//CUSTOMERS INFO

// Получение фильтра
export const getCountriesFilterOptions = async () => {
  // Здесь получение данных для фильтра
  const data = null

  // Не забываем про функцию prepareDataForDropdown
  return data
}

// Получение данных для категорий и бублика
export const getDeliveryFreightData = async (
  {
    filter
  }
): Promise<PreparedDeliveryFreightType> => {
  const data: ServerDeliveryFreightType[] = null
  return prepareDeliveryFreightData(data)
}

// Получение карточек ПЕРЕЧЕНЬ ТОВАРОВ
export const getDeliveryCardsData = async (
  {
    filter
  }
): Promise<PreparedDeliveryCardType[]> => {
  const data: ServerDeliveryCardType[] = null
  return prepareDeliveryCardsData(data)
}

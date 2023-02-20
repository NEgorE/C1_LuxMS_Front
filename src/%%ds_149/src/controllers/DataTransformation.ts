import { METRICS } from "../Constants/CONSTANTS";
import { ServerTopMetricsType } from "../types/GeneralInfoTypes";
import { PreparedTopMetricType } from "../types/GeneralInfoTypes";

export const prepareDataForDropdown = (arr) => {
  if (!Array.isArray(arr) || !arr) return []

  return arr.map((obj) => {
    const keys = Object.keys(obj)
    const nameKey = keys[0]

    return {
      name: obj[nameKey]
    }
  })
}




export const prepareTopMetricsData = (data: ServerTopMetricsType): PreparedTopMetricType[] => {  
  return METRICS.map((el) => {    
    return {      
      ...el,      
      fact: data[el.keyName].toFixed(1)    
    }  
  })
}
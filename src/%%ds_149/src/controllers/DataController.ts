// @ts-ignore
import {KoobDataService} from 'bi-internal/services'
import { prepareDataForDropdown } from './DataTransformation';
import {prepareTopMetricsData} from './DataTransformation';

const {koobDataRequest3} = KoobDataService;
const KOOB_ID = 'luxmsbi.Sales_Demo';



export const getCategoryFilter = async () => {
    const data = await koobDataRequest3(
        KOOB_ID, 
        ['categoryname'], 
        [], 
        {}, 
        {}, 
        'getCategoryFilter'
    )
    return prepareDataForDropdown(data)
}



export const getEmployeeTopMetricsData = async (
    { filter }

) => {  
    const data = await koobDataRequest3(    
        KOOB_ID,    
        ['categoryname'],    
        ['sum(vol)', 'sum(order_quantity)'],    
        {      
            categoryname: ['=', 'Женская одежда']    
        },    
        {},    
        'getEmployeeTopMetricsData'  )  
    return prepareTopMetricsData(data[0])
}
export type ServerTopMetricsType = {
  categoryname: string
  order_quantity: number
  vol: number
}

export type PreparedTopMetricType = {
  title: string
  fact: number
  keyName: string
}

export type ServerBarType = {
  empid: number
  emp_last_name: string
  vol: number
}

export type PreparedBarType = {
  empId: number
  empName: string
  vol: number
  isDeclined: boolean
}

export type ServerTableType = {
  empid: number
  emp_last_name: string
  vol: number
  emp_year_salary: number
  order_quantity: number
}

export type PreparedTableType = {
  empId: number
  empName: string
  vol: number
  empSalary: number
  isDeclined: boolean
  orderQuantity: number
}

export type CustomUrlDataType = {
  employee: string
}

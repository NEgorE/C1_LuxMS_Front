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





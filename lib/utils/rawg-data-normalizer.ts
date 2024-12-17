import { RawgApiResponse, RawgResult } from 'rawg'
import { getTypeFields } from './get-type-fields'

export function normalizeRawgData<T extends RawgResult>(
  data: RawgApiResponse,
): Array<T> {
  if (!data.results || !Array.isArray(data.results)) {
    return []
  }
  const fields = getTypeFields<T>()
  
  return data.results.map((item) => {
    const result = {} as T
    fields.forEach((field) => {
      if (field in item) {
        result[field as keyof T] = item[field as keyof typeof item] as T[keyof T]
      }
    })
    return result
  })
}

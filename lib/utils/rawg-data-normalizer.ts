import { RawgApiResponse, RawgResult } from 'rawg'

export function normalizeRawgData(
  data: RawgApiResponse,
  requiredFields: string[]
): Array<RawgResult> {
  if (!data.results) {
    return []
  }

  
  return data.results.map((item) => {
    const { id, name, slug } = item
    const result = { id, name, slug } as RawgResult

    requiredFields.forEach((field) => {
      if (field in item) {
        (result[field as keyof RawgResult] as RawgResult[keyof RawgResult]) = 
          item[field as keyof typeof item]
      }
    })
    return result
  })
}

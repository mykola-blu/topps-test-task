// Get keys of a given type
export function getTypeFields<T extends object>(): (keyof T)[] {
  return Object.keys({} as { [K in keyof T]: T[K] }) as (keyof T)[]
}

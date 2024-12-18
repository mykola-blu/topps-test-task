declare module 'rawg' {
  export interface RawgResult {
    id: number
    name: string
    slug: string
  }
  export interface RawgApiResponse {
    count: number
    next: string
    results: Array<RawgGame | RawgStore | RawgCreator>
  }
  export interface RawgGame extends RawgResult {
    released: string
    background_image: string
    rating: number
  }
  export interface RawgStore extends RawgResult {
    domain: string
    games_count: number
  }
  export interface RawgCreator extends RawgResult {
    games_count: number
    image: string
  }
}

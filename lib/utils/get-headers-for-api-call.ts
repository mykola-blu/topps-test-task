// Helper for getting needed headers to call an api. Can be extended in future
import { headers } from 'next/headers'

export async function getHeadersForApiCall(): Promise<{ cookie: string }> {
  const headersList = await headers()
  return {
    cookie: headersList.get('cookie') || '',
  }
}

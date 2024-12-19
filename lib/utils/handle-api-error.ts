export function handleApiError(error: unknown) {
  console.error('API Error:', error)
  
  if (error instanceof Error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  })
} 
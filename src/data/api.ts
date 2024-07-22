const baseURL = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api`

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>
}

export async function api<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const url = `${baseURL}${endpoint}`

  const defaultOptions: FetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const finalOptions: FetchOptions = { ...defaultOptions, ...options }

  try {
    const response = await fetch(url, finalOptions)
    const body = await response.json()

    if (!response.ok) {
      const errorData = body
      throw new Error(errorData.message)
    }

    return body as T
  } catch (error) {
    console.error('Fetch API error:', error)
    throw error
  }
}

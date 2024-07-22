export function resolveImageUrl(url: string | null) {
  if (!url) return '/no-image-available.jpg'

  const test = url.replace(
    String(process.env.NEXT_PUBLIC_API_BASE_URL),
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/images`,
  )

  console.log(test)

  return test
}

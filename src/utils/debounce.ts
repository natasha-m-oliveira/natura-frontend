/* eslint-disable @typescript-eslint/no-explicit-any */
export default function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(async () => {
      await callback(...args)
      timer = null
    }, delay)
  }
}

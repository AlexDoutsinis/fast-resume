export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/' as any
  }

  return null
}

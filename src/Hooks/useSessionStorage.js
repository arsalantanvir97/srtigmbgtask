import { useEffect, useState } from 'react'

export default function useSessionStorage(key, initialValue) {
  const storedData = sessionStorage.getItem(key)
  const initialData = storedData ? JSON.parse(storedData) : initialValue

  const [value, setValue] = useState(initialData)

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

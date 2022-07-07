import { useState } from 'react'

export const useStateCount = () => {
  const [count, setCount] = useState(0)
  const countUP = () => {
    setCount(count + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }

  return { count, countUP, countDown }
}
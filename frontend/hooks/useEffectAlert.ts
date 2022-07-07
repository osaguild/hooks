import { useEffect, useState } from "react"

export const useEffectAlert = () => {
  const [message1, setMessage1] = useState("hello")
  const [message2, setMessage2] = useState("world")

  const changeMessage1 = (message: string) => {
    setMessage1(message)
  }
  const changeMessage2 = (message: string) => {
    setMessage2(message)
  }

  useEffect(() => {
    alert(`1:${message1}, 2:${message2}`)
  }, [message1])

  return { message1, changeMessage1, message2, changeMessage2 }
}
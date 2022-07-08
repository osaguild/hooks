import { useMemo, useState } from "react"

const useMemoCalc = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const countUp1 = () => {
    setCount1(count1 + 1)
  }
  const countUp2 = () => {
    setCount2(count2 + 1)
  }
  const calc = useMemo(() => {
    console.log('useMemo is called')
  }, [count1])

  return { count1, count2, countUp1, countUp2 }
}

export default useMemoCalc
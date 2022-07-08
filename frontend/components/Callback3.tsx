import { FunctionComponent, useState, memo, useCallback } from "react"
import { Box, Button } from "@mui/material"

const Title: FunctionComponent = memo(() => {
  console.log('[3]Title component is loaded')
  return (
    <h3>[USE MEMO PATTERN] All component become memo, but Memo2, Count and CountUp is loaded</h3>
  )
})

interface ICount { count: number }
const Count: FunctionComponent<ICount> = memo(({ count }) => {
  console.log('[3]Count component is loaded')
  return (
    <span>count: {count}</span>
  )
})

interface ICountUp { callback: () => void }
const CountUp: FunctionComponent<ICountUp> = memo(({ callback }) => {
  console.log('[3]CountUp component is loaded')
  return (
    <Button onClick={callback}>CountUp</Button>
  )
})

const Callback3: FunctionComponent = () => {
  console.log('[3]Callback3 component is loaded')
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countUp1 = useCallback(() => setCount1(count1 + 1), [count1])
  const countUp2 = useCallback(() => setCount2(count2 + 1), [count2])
  return (
    <Box>
      <Title />
      <Count count={count1} />
      <CountUp callback={countUp1} />
      <br/>
      <Count count={count2} />
      <CountUp callback={countUp2} />
    </Box>
  )
}

export default Callback3
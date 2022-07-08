import { FunctionComponent, useState, memo } from "react"
import { Box, Button } from "@mui/material"

const Title: FunctionComponent = memo(() => {
  console.log('[2]Title component is loaded')
  return (
    <h3>[USE MEMO PATTERN] All component become memo, but Memo2, Count and CountUp is loaded</h3>
  )
})

interface ICount { count: number }
const Count: FunctionComponent<ICount> = memo(({ count }) => {
  console.log('[2]Count component is loaded')
  return (
    <span>count: {count}</span>
  )
})

interface ICountUp { callback: () => void }
const CountUp: FunctionComponent<ICountUp> = memo(({ callback }) => {
  console.log('[2]CountUp component is loaded')
  return (
    <Button onClick={callback}>CountUp</Button>
  )
})

const Memo2: FunctionComponent = () => {
  console.log('[2]Callback2 component is loaded')
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  return (
    <Box>
      <Title />
      <Count count={count1} />
      <CountUp callback={() => { setCount1(count1 + 1) }} />
      <br/>
      <Count count={count2} />
      <CountUp callback={() => { setCount2(count2 + 1) }} />
    </Box>
  )
}

export default Memo2
import { FunctionComponent, useState } from "react"
import { Box, Button } from "@mui/material"

const Title: FunctionComponent = () => {
  console.log('[1]Title component is loaded')
  return (
    <h3>[NO MEMO PATTERN] When click "CountUp", all component is loaded</h3>
  )
}

interface ICount { count: number }
const Count: FunctionComponent<ICount> = ({ count }) => {
  console.log('[1]Count component is loaded')
  return (
    <span>count: {count}</span>
  )
}

interface ICountUp { callback: () => void }
const CountUp: FunctionComponent<ICountUp> = ({ callback }) => {
  console.log('[1]CountUp component is loaded')
  return (
    <Button onClick={callback}>CountUp</Button>
  )
}

const Callback1: FunctionComponent = () => {
  console.log('[1]Callback1 component is loaded')
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

export default Callback1
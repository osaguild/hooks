import { FunctionComponent } from "react"
import { Box, Button } from "@mui/material"
import useMemoCalc from "../hooks/useMemoCalc"

const Memo: FunctionComponent = () => {
  const { count1, count2, countUp1, countUp2 } = useMemoCalc()
  return (
    <Box>
      count1: {count1}
      <Button onClick={countUp1}>countUp1</Button>
      <br />
      count2: {count2}
      <Button onClick={countUp2}>countUp2</Button>
    </Box>
  )
}

export default Memo
import { FunctionComponent } from 'react'
import { Box, Button } from '@mui/material'
import { useStateCount } from '../hooks/useStateCount'

const State2: FunctionComponent = () => {
  const { count, countUP, countDown } = useStateCount()
  return (
    <Box>
      Component2 /
      count: {count}
      <Button onClick={countUP}>Count Up</Button>
      <Button onClick={countDown}>Count Down</Button>
    </Box>
  )
}

export default State2
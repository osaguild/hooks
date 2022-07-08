import { FunctionComponent } from 'react'
import { Box, Button } from '@mui/material'
import { useReduceCount } from '../hooks/useReduceCount'

const Reducer1: FunctionComponent = () => {
  const { count, dispatch } = useReduceCount()

  return (
    <Box>
      count: {count}
      <Button onClick={() => dispatch('increment')}>Increment</Button>
      <Button onClick={()=>dispatch('decrement')}>Decrement</Button>
      <Button onClick={()=>dispatch('reset')}>Reset</Button>
    </Box>
  )
}

export default Reducer1
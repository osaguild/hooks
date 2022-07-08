import { FunctionComponent } from 'react'
import { Box, Button } from '@mui/material'
import { useReduceCountDouble } from '../hooks/useReduceCountDouble'

const Reducer2: FunctionComponent = () => {
  const { count, dispatch } = useReduceCountDouble()

  return (
    <Box>
      count1: {count.count1}
      <Button onClick={() => dispatch({type:'increment1', value: 1})}>Increment</Button>
      <Button onClick={()=>dispatch({type:'decrement1', value: 1})}>Decrement</Button>
      <Button onClick={()=>dispatch({type:'reset1', value: 0})}>Reset</Button>
      <br/>
      count2: {count.count2}
      <Button onClick={() => dispatch({type:'increment2', value: 1})}>Increment</Button>
      <Button onClick={()=>dispatch({type:'decrement2', value: 1})}>Decrement</Button>
      <Button onClick={()=>dispatch({type:'reset2', value: 0})}>Reset</Button>
    </Box>
  )
}

export default Reducer2
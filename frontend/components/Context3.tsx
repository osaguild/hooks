import { FunctionComponent, useContext } from 'react'
import { Box } from '@mui/material'
import { MessageContext } from '../context/messageContext'

const Context3: FunctionComponent = () => {
  const { message1,message2 } = useContext(MessageContext)
  return (
    <Box>
      context 3 / message 1: {message1}
      <br/>
      context 3 / message 2: {message2}
    </Box>
  )
}

export default Context3
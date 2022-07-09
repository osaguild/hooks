import { FunctionComponent, useContext } from 'react'
import { Box } from '@mui/material'
import Context3 from './Context3'
import { MessageContext } from '../context/messageContext'

const Context2: FunctionComponent = () => {
  const { message1, message2 } = useContext(MessageContext)
  return (
    <Box>
      context 2 / message 1: {message1}
      <br/>
      context 2 / message 2: {message2}
      <Context3 />
    </Box>
  )
}

export default Context2
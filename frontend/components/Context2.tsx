import { FunctionComponent, useContext } from 'react'
import { Box } from '@mui/material'
import Context3 from './Context3'
import { MessageContext } from '../context/messageContext'

const Context2: FunctionComponent = () => {
  const { message } = useContext(MessageContext)
  return (
    <Box>
      Context 2 / message: {message}
      <Context3 />
    </Box>
  )
}

export default Context2
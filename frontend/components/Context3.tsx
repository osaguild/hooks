import { FunctionComponent, useContext } from 'react'
import { Box } from '@mui/material'
import { MessageContext } from '../context/messageContext'

const Context3: FunctionComponent = () => {
  const { message } = useContext(MessageContext)
  return (
    <Box>
      Context 3 / message: {message}
    </Box>
  )
}

export default Context3
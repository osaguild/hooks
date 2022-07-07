import { FunctionComponent, useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { MessageProvider } from '../context/messageContext'
import Context2 from './Context2'

const Context1: FunctionComponent = () => {
  const [message, setMessage] = useState('hello osaguild')
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  
  return (
    <Box>
      <MessageProvider message={message}>
        <TextField value={message} onChange={change} />
        <br />
        Context 1 / message: {message}
        <Context2 />
      </MessageProvider>
    </Box>
  )
}

export default Context1
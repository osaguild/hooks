import { FunctionComponent, useState } from 'react'
import { Box, TextField } from '@mui/material'
import Props2 from './Props2'

const Props1: FunctionComponent = () => {
  const [message, setMessage] = useState('Hello World')
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <Box>
      <TextField value={message} onChange={change} />
      <br />
      Props 1 / message: {message}
      <Props2 message={message} />
    </Box>
  )
}

export default Props1
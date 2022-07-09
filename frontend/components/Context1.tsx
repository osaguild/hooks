import { FunctionComponent, useState, useContext } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { MessageContext, useProvider } from '../context/messageContext'
import Context2 from './Context2'

const Context1: FunctionComponent = () => {
  const { value, updateFunc } = useProvider()

  const [_message1, _setMessage1] = useState('')
  const [_message2, _setMessage2] = useState('')

  const _onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setMessage1(e.target.value)
  }
  const _onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setMessage2(e.target.value)
  }

  return (
    <Box>
      <MessageContext.Provider value={value}>
        context 1 / message 1: {value.message1}
        <TextField value={_message1} onChange={_onChange1} />
        <Button onClick={() => { updateFunc.update1(_message1) }}>Update Context</Button>
        <br />
        context 1 / message 2: {value.message2}
        <TextField value={_message2} onChange={_onChange2} />
        <Button onClick={() => { updateFunc.update2(_message2) }}>Update Context</Button>
        <Context2 />
      </MessageContext.Provider>
    </Box>
  )
}

export default Context1
import { FunctionComponent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useEffectAlert } from '../hooks/useEffectAlert'

const Effect: FunctionComponent = () => {
  const [wk1, setWk1] = useState('')
  const [wk2, setWk2] = useState('')
  const { message1, changeMessage1, message2, changeMessage2 } = useEffectAlert()

  const change1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWk1(e.target.value)
  }
  const send1 = () => {
    changeMessage1(wk1)
  }
  const change2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWk2(e.target.value)
  }
  const send2 = () => {
    changeMessage2(wk2)
  }

  return (
    <Box>
      message1: {message1}
      <TextField value={wk1} onChange={change1} />
      <Button onClick={send1}>Send</Button>
      <br/>
      message2: {message2}
      <TextField value={wk2} onChange={change2} />
      <Button onClick={send2}>Send</Button>
    </Box>
  )
}

export default Effect
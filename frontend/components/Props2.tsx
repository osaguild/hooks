import { FunctionComponent } from 'react'
import { Box } from '@mui/material'
import Props3 from './Props3'

interface IProps {
  message: string
}

const Props2: FunctionComponent<IProps> = ({ message }) => {
  return (
    <Box>
      Props 2 / message: {message}
      <Props3 message={message} />
    </Box>
  )
}

export default Props2
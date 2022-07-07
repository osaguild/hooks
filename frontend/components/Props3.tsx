import { FunctionComponent } from 'react'
import { Box } from '@mui/material'

interface IProps {
  message: string
}

const Props3: FunctionComponent<IProps> = ({ message }) => {
  return (
    <Box>
      Props 3 / message: {message}
    </Box>
  )
}

export default Props3
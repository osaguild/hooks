import { FunctionComponent } from "react"
import { Box } from "@mui/material"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"

const Home: FunctionComponent = () => {
  return (
    <Box>
      <Component1 />
      <Component2 />
    </Box>
  )
}

export default Home
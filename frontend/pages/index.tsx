import { FunctionComponent } from "react"
import { Box } from "@mui/material"
import State1 from "../components/State1"
import State2 from "../components/State2"
import Effect from "../components/Effect"

const Home: FunctionComponent = () => {
  return (
    <Box>
      <Box>
        <h1>useState</h1>
        <State1 />
        <State2 />
      </Box>
      <Box>
        <h1>useEffect</h1>
        <Effect />
      </Box>
    </Box>
  )
}

export default Home
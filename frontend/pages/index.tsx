import { FunctionComponent } from "react"
import { Box } from "@mui/material"
import State1 from "../components/State1"
import State2 from "../components/State2"
import Effect from "../components/Effect"
import Props1 from "../components/Props1"
import Context1 from "../components/Context1"
import Reducer1 from "../components/Reducer1"
import Reducer2 from "../components/Reducer2"

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
      <Box>
        <h1>useContext</h1>
        <h3>props version</h3>
        <Props1 />
        <h3>context version</h3>
        <Context1 />
      </Box>
      <Box>
        <h1>useReducer</h1>
        <h3>Reducer1</h3>
        <Reducer1 />
        <h3>Reducer2</h3>
        <Reducer2 />
      </Box>
    </Box>
  )
}

export default Home
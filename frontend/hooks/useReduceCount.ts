import { useReducer } from "react"

const initialState = 0

const reducer = (state: number, action: string) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
}

export const useReduceCount = () => {
  const [count, dispatch] = useReducer(reducer,initialState)
  return { count, dispatch }
}
import { useReducer } from "react"

type State = {
  count1: number,
  count2: number,
}

type Action = {
  type: string,
  value: number,
}

const initialState = {
  count1: 0,
  count2: 10,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, count1: state.count1 + action.value }
    case "decrement1":
      return { ...state, count1: state.count1 - action.value }
    case "reset1":
      return { ...state, count1: initialState.count1 }
    case "increment2":
      return { ...state, count2: state.count2 + action.value }
    case "decrement2":
      return { ...state, count2: state.count2 - action.value }
    case "reset2":
      return { ...state, count2: initialState.count2 }
    default:
      return state
  }
}

export const useReduceCountDouble = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return { count, dispatch }
}
import { createContext, useState } from 'react'

export type IMessage = {
  message1: string,
  message2: string,
}
const initialMessage: IMessage = {
  message1: 'hello world',
  message2: 'hello world',
}

export const MessageContext = createContext(initialMessage)

export type IProvider = {
  value: {
    message1: string,
    message2: string
  }
  updateFunc: {
    update1: (message: string) => void,
    update2: (message: string) => void
  }
}

export const useProvider = (): IProvider => {
  const [message1, setMessage1] = useState(initialMessage.message1)
  const [message2, setMessage2] = useState(initialMessage.message2)

  const update1 = (message: string) => setMessage1(message)
  const update2 = (message: string) => setMessage2(message)
  
  const provider: IProvider = {
    value: { message1, message2 },
    updateFunc: { update1, update2 }
  }
  
  return provider
}
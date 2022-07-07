import { createContext, FunctionComponent } from 'react'

type IMessage = {
  message: string,
}
const message: IMessage = {
  message: 'hello world',
}
export const MessageContext = createContext(message)
interface Props {
  message: string,
  children: React.ReactNode,
}
export const MessageProvider: FunctionComponent<Props> = ({ message, children }) => {
  const newMessage: IMessage = { message: message }
  return (
    <MessageContext.Provider value={newMessage} >
      {children}
    </MessageContext.Provider>
  )
}


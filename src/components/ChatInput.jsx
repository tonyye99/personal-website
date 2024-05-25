import { SendHorizonal } from 'lucide-react'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Button } from './Button'
import { Input } from './ui/input'

const ChatInput = forwardRef(({ setMessage }, ref) => {
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef?.current?.focus()
    },
  }))

  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  function handleSend() {
    setMessage(input)
    setInput('')
  }

  return (
    <div className="relative flex items-center gap-2">
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSend()
          }
        }}
        className="pl-2 pr-16"
      ></Input>
      <Button
        className="absolute right-0 mr-2 h-8 w-12"
        onClick={() => handleSend()}
      >
        <SendHorizonal size={16} />
      </Button>
    </div>
  )
})

ChatInput.displayName = 'ChatInput'

export default ChatInput

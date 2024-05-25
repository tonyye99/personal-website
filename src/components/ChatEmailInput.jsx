import { useEffect, useRef, useState } from 'react'
import { Bot } from 'lucide-react'
import { Input } from './ui/input'

const ChatEmailInput = ({ handleEmail }) => {
  const [email, setEmail] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-3 self-start text-sm lg:text-base">
        <div className="rounded-full border border-gray-600 p-1.5">
          <Bot size={16}></Bot>
        </div>
        Hello! Please enter your email to continue.
      </div>
      <div className="self-end rounded-sm bg-gray-100 p-3 text-sm dark:bg-zinc-900 dark:text-white lg:text-base">
        <label className="mb-2 block text-sm font-medium">Email</label>
        <div className="relative shadow-sm">
          <Input
            ref={inputRef}
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="hello@gmail.com"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleEmail(email)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatEmailInput

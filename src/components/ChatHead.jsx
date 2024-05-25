import clsx from 'clsx'
import { Bot, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ChatInput from './ChatInput'
import ChatInterface from './ChatInterface'

const ChatHead = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [message, setMessage] = useState('')
  const [showInput, setShowInput] = useState(false)
  const chatuiRef = useRef(null)
  const chatInterfaceRef = useRef(null)
  const chatInputRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatuiRef.current && !chatuiRef.current.contains(event.target)) {
        // setIsChatOpen(false)
        setMessage('')
        setIsFocused(false)
      } else {
        setIsFocused(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isChatOpen && showInput) {
      chatInputRef.current.focusInput()
    }
  }, [isChatOpen, showInput])

  function handleInputMessage(message) {
    setMessage(message)
  }

  function handleMessages(messages) {
    if (messages.length === 0) return
    chatInterfaceRef.current.scrollTop = chatInterfaceRef.current.scrollHeight
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-10">
      {!isChatOpen && (
        <>
          <span className="absolute top-[10px] right-[15px] z-50 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
          </span>
          <button
            onClick={() => {
              setIsChatOpen(true)
            }}
            className="hover:bg-gray-150 relative flex h-16 w-16 items-center justify-center rounded-full border border-gray-600 bg-gray-100 shadow-lg transition duration-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <Bot size={32} />
          </button>
        </>
      )}

      {isChatOpen && (
        <div
          ref={chatuiRef}
          className="absolute bottom-2 right-2 h-[32rem] w-96 max-w-[17rem] rounded-xl bg-white shadow-lg dark:bg-zinc-800 sm:max-w-md"
        >
          <div className="flex flex-col gap-2">
            <div className="border-gray-250 flex items-center justify-between rounded-t-lg border-b bg-zinc-800 p-4 dark:border-gray-500">
              <Bot
                size={24}
                className={isFocused ? 'text-primary' : 'text-white'}
              />
              <X
                size={24}
                className={clsx(
                  'cursor-pointer',
                  isFocused ? 'text-primary' : 'text-white'
                )}
                onClick={() => setIsChatOpen(false)}
              />
            </div>

            <div ref={chatInterfaceRef} className="h-[24rem] overflow-auto p-3">
              <ChatInterface
                message={message}
                messagesCallback={handleMessages}
                onThreadIdChange={(threadId) => {
                  setShowInput(threadId !== null)
                }}
                onEmailHandled={() => {
                  chatInputRef.current.focusInput()
                }}
              />
            </div>

            <div className="px-3">
              {showInput && (
                <ChatInput
                  ref={chatInputRef}
                  setMessage={(message) => handleInputMessage(message)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatHead

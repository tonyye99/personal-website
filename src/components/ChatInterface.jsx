import { useState, useEffect, useRef } from 'react'
import { remark } from 'remark'
import html from 'remark-html'
import ChatEmailInput from './ChatEmailInput'
import { supabase } from '@/lib/supabase'
import { Bot } from 'lucide-react'
import Loading from './ui/loading'

const Chat = ({
  message,
  messagesCallback,
  onThreadIdChange,
  onEmailHandled,
}) => {
  const [messages, setMessages] = useState([])
  const [threadId, setThreadId] = useState('')
  const [isCreatingThread, setIsCreatingThread] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(
        '/api/openai/messages/list?threadId=' + threadId
      )
      if (!response.ok) {
        console.error('Failed to fetch messages')
        return
      }
      const messages = await response.json()
      const messagesList = messages.data.reverse().map((msg) => {
        const processedMessage = remark()
          .use(html)
          .processSync(msg.content[0].text.value)
          .toString()
        return {
          role: msg.role,
          message: processedMessage,
        }
      })
      setMessages(messagesList)
    }

    let threadId = localStorage.getItem('threadId')
    if (threadId) {
      setThreadId(threadId)
      fetchMessages()
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      messagesCallback(messages)
    }
  }, [messagesCallback, messages])

  useEffect(() => {
    if (threadId) {
      onThreadIdChange(threadId)
    }
  }, [threadId, onThreadIdChange])

  useEffect(() => {
    async function handleSend(message) {
      setMessages((prev) => [...prev, { role: 'user', message: message }])
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', message: 'Assistant is thinking ...' },
      ])

      try {
        await fetch('/api/openai/messages/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ threadId, role: 'user', content: message }),
        })

        const runResponse = await fetch('/api/openai/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ threadId }),
        })
        if (!runResponse.ok) {
          throw new Error('Failed to send message')
        }
        const run = await runResponse.json()

        if (run.status === 'completed') {
          setMessages((prev) => prev.slice(0, -1))
          const messagesResponse = await fetch(
            '/api/openai/messages/list?threadId=' + threadId
          )
          if (!messagesResponse.ok) {
            throw new Error('Failed to fetch messages')
          }
          const messagesList = await messagesResponse.json()

          const assistantMessage =
            messagesList.data.reverse()[messagesList.data.length - 1].content[0]
              .text.value

          const processedMessage = remark()
            .use(html)
            .processSync(assistantMessage)
            .toString()

          setMessages((prev) => [
            ...prev,
            { role: 'assistant', message: processedMessage },
          ])
        }
      } catch (error) {
        console.error('Failed to send message', error)
      }
    }

    if (message && threadId) {
      handleSend(message)
    }
  }, [message, threadId])

  const messagesList = messages.map((msg, index) => {
    if (
      msg.role === 'assistant' &&
      msg.message === 'Assistant is thinking ...'
    ) {
      return (
        <div
          key={`assistant_${index}`}
          className="flex items-start gap-3 self-start text-sm lg:text-base"
        >
          <div className="rounded-full border border-gray-600 p-1.5">
            <Bot size={16}></Bot>
          </div>
          <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-900"></div>
        </div>
      )
    }

    return msg.role === 'assistant' ? (
      <div
        key={`assistant_${index}`}
        className="flex items-start gap-3 self-start text-sm lg:text-base"
      >
        <div className="rounded-full border border-gray-600 p-1.5">
          <Bot size={16}></Bot>
        </div>
        <div dangerouslySetInnerHTML={{ __html: msg.message }}></div>
      </div>
    ) : (
      <div
        key={`user_${index}`}
        className="self-end rounded-sm bg-gray-100 p-3 text-sm dark:bg-zinc-900 dark:text-white lg:text-base"
        dangerouslySetInnerHTML={{ __html: msg.message }}
      ></div>
    )
  })

  const handleEmailInput = async (email) => {
    setIsCreatingThread(true)
    try {
      const response = await fetch('/api/openai/threads', { method: 'POST' })
      if (!response.ok) {
        console.error('Failed to create thread')
        return
      }
      const thread = await response.json()
      setThreadId(thread.id)
      localStorage.setItem('threadId', thread.id)
    } catch (error) {
      console.error('Failed to create thread', error)
      setIsCreatingThread(false)
    }

    try {
      const { error } = await supabase.from('chats').insert({
        email,
        threadId: localStorage.getItem('threadId') || '',
      })
      if (error) {
        console.log(error)
        throw new Error('Failed to send email')
      }

      setMessages([
        {
          role: 'assistant',
          message: 'Hello!',
        },
      ])
    } catch (error) {
      setThreadId('')
      localStorage.removeItem('threadId')
      setIsCreatingThread(false)
      console.error('Failed to send email', error)
    }

    onEmailHandled()
    setIsCreatingThread(false)
  }

  const ChatEmailInputForm = () => {
    if (!isCreatingThread) {
      return (
        <ChatEmailInput
          handleEmail={(email) => {
            handleEmailInput(email)
          }}
        />
      )
    }
    return (
      <div className="flex w-full items-center justify-center">
        <Loading />
      </div>
    )
  }

  return (
    <div ref={chatRef} className="flex w-full flex-col gap-5 overflow-auto">
      {threadId ? (
        <div className="flex flex-col gap-6">{messagesList}</div>
      ) : (
        <ChatEmailInputForm />
      )}
    </div>
  )
}

export default Chat

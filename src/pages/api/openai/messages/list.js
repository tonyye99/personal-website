import openai from '../../../../lib/openai'

export default async function handler(req, res) {
  const threadId = req.query.threadId

  try {
    const messages = await openai.beta.threads.messages.list(threadId)

    res.status(200).json(messages)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

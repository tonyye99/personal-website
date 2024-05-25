import openai from '../../../../lib/openai'

export default async function handler(req, res) {
  const { content, role, threadId } = req.body

  try {
    const messages = await openai.beta.threads.messages.create(threadId, {
      role,
      content,
    })

    res.status(200).json(messages)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ error: 'An error occurred' })
  }
}

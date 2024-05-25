import openai from '../../../lib/openai'

export default async function handler(req, res) {
  const { threadId } = req.body

  try {
    let run = await openai.beta.threads.runs.createAndPoll(threadId, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    })

    res.status(200).json(run)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

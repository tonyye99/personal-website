import openai from '../../../lib/openai'

export default async function handler(_req, res) {
  try {
    const thread = await openai.beta.threads.create({
      tool_resources: {
        file_search: {
          vector_store_ids: [process.env.OPENAI_VECTOR_DB_ID],
        },
      },
    })

    res.status(200).json(thread)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

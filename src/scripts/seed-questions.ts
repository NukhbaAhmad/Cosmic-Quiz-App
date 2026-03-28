import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@config/payload.config'
import { QUIZ_QUESTIONS} from "@constants/questions"

async function seed() {
  const payload = await getPayload({ config })
  for (const q of QUIZ_QUESTIONS) {
    try {
      await payload.create({
        collection: 'questions',
        data: q,
      })
      console.log(`Added: ${q.question}`)
    } catch (error) {
      console.error(`Error adding question:`, error)
    }
  }

  console.log('YAAYYYY! All questions added successfully.!')
  process.exit(0)
}

seed().catch(err => {
  console.error('Seed failed:', err)
  process.exit(1)
})